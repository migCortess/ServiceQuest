import { PushNotificationSchema, PushNotifications, Token, ActionPerformed } from '@capacitor/push-notifications';
import { useSwal } from './useSwal';
import { useTranslation } from 'react-i18next';
import * as PushNotificationServices from '../../services/templateServices/pushNotificationServices';
import { ISQLResult } from '../../@Types/base';
import { usePushNotificationStore } from '../../store/auth/usePushNotificationStore';

export const usePushNotification = () => {
    const [t] = useTranslation("global");
    const { SuccessError } = useSwal();
    const {
        pushNotificationToken,
        setPushNotificationToken
      } = usePushNotificationStore();

    const RegisterTokenNotification = async (IdUser:number) => {
        if(import.meta.env.VITE_IS_MOBILE){
            const register=()=>{
                // Register with Apple / Google to receive push via APNS/FCM
                PushNotifications.register();
                // On success, we should be able to receive notifications
                PushNotifications.addListener('registration',
                    async (token: Token) => {
                        setPushNotificationToken(token.value);
                        const rslt = await PushNotificationServices.RegisterTokenNotification(IdUser,token.value);
                        if(rslt.errorMessage){
                            SuccessError("error",t("AnErrorHasOccurred"));                     
                        }
                    }
                );
        
                // Some issue with our setup and push will not work
                PushNotifications.addListener('registrationError',
                    (error: any) => {
                        alert('Error on registration: ' + JSON.stringify(error));
                    }
                );
        
                // Show us the notification payload if the app is open on our device
                PushNotifications.addListener('pushNotificationReceived',
                    (_notification: PushNotificationSchema) => {
                        
                    }
                );
        
                // Method called when tapping on a notification
                PushNotifications.addListener('pushNotificationActionPerformed',
                    (_notification: ActionPerformed) => {
                
                    }
                );
            }
        
            PushNotifications.checkPermissions().then((res) => {
                if (res.receive !== 'granted') {
                PushNotifications.requestPermissions().then((res) => {
                    if (res.receive === 'denied') {
                    }
                    else {
                    register();
                    }
                });
                }
                else {
                register();
                }
            });
        }
    };
 
    const DeleteTokenNotification = async ():Promise<ISQLResult>  => {
        if(import.meta.env.VITE_IS_MOBILE){
            const RsltNoti = await PushNotificationServices.DeleteTokenNotification(pushNotificationToken!);
            if(!RsltNoti.errorMessage){
                SuccessError("error",t("AnErrorHasOccurred"));    
            }
            return RsltNoti;
        }else {
            return {
                identity: 0,
                errorMessage: undefined,
                errorNumber: undefined
            }
        }    
    };

    const GetDeviceToken = async (IdUser:number):Promise<string[]> => {
        var Rslt = await PushNotificationServices.GetDeviceToken(IdUser);7
        if(!(Rslt as ISQLResult).errorMessage){
                return []
        }else {
            return (Rslt as string[]);
        }
    }

    const  SendPushNotification = async (To:string[],Title:string,Body:string) => {
        await PushNotificationServices.SendPushNotification(To,Title,Body);
    }

    return {
        RegisterTokenNotification,
        DeleteTokenNotification,
        GetDeviceToken,
        SendPushNotification
    }
}