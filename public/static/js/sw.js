//This shall be the service worker

//This is where the dynamic data shall be coming to.
//It shall work even when we are offline


self.addEventListener("push", event => {
    const data = event.data.json()
    const { title } = data;

    //we shall add on to this more.
  
    const options = {
      body: data.body,
      icon: data.icon,
      data:data.url,
      vibrate:[200,100,200]
    }
  
    event.waitUntil(self.registration.showNotification(title, options))
  })