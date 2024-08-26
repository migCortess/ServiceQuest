import { IonBackButton, IonButtons, IonContent, IonHeader, IonItem, IonLabel, IonPage, IonTitle, IonToolbar, IonFooter, IonButton } from '@ionic/react';
import { useNavigate } from "react-router"
export const DetailPage = () => {
    const navigate = useNavigate();

    const Home = () => {
        navigate("/");
    }
  return (
    <IonPage>
    <IonHeader>
        <IonToolbar>
        <IonButton onClick={Home}>
                    Back
                </IonButton>
            <IonTitle>
                Detail Page
            </IonTitle>
        </IonToolbar>
    </IonHeader>
    <IonContent className="ion-padding">
            <h1>Detail</h1>
            <IonItem detail>
                <IonLabel>More Info</IonLabel>
            </IonItem>
        </IonContent>
        <IonFooter>
        <IonToolbar>
            <IonButtons slot="start">
                <IonBackButton>back</IonBackButton>
            </IonButtons>
            <IonTitle>
                Detail Page
            </IonTitle>
        </IonToolbar>
        </IonFooter>
    
</IonPage>
  )
}
