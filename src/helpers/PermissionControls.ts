export const DisabledUserActions = (actions: any, action: string) => {
  let disabled = false;
  const CurrentPath = window.location.pathname.toLowerCase();
  const ADD = actions.filter(
    (actionUser: any) =>
      actionUser.code === action &&
      CurrentPath.substring(1).includes(
        actionUser.screenLocation.pathScreenLocation.toLowerCase()
      ) &&
      actionUser.screenLocation.pathScreenLocation !== ""
  );
  if (ADD.length === 0) return disabled;
  if (ADD[0].hasAllow === 0) {
    if (ADD[0].disableScreenLocation) {
      disabled = true;
    }
  }
  return disabled;
};
