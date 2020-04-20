
const publicServerKey = "BPOEiTE_08VwfOOifM77x4DvPKMS3F6Z_W6DdrQuiIc2GgQdmkpwkaXjcPfqOFr5bOsbG6wLDiu95SSXIWlIwxs"


export async function send(){
  
    if("serviceWorker" in navigator){
    let result = await Notification.requestPermission().catch(console.log);

       if(result === "granted"){

      const sub = await (await navigator.serviceWorker.register('/static/js/sw.js')).pushManager.subscribe({
        userVisibleOnly:true,
        applicationServerKey:urlBase64ToUint8Array(publicServerKey)
      })

      let _sub = JSON.stringify(sub);
      return _sub;


    };
      return false;
    }
  return false;
};

function urlBase64ToUint8Array(base64String) {
    const padding = '='.repeat((4 - base64String.length % 4) % 4);
    const base64 = (base64String + padding)
      .replace(/-/g, '+')
      .replace(/_/g, '/');
  
    const rawData = window.atob(base64);
    const outputArray = new Uint8Array(rawData.length);
  
    for (let i = 0; i < rawData.length; ++i) {
      outputArray[i] = rawData.charCodeAt(i);
    }
    return outputArray;
  }