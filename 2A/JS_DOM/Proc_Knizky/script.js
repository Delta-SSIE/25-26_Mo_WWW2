const books = [ 
    { 
      title: 'The Design of EveryDay Things', 
      author: 'Don Norman', 
      alreadyRead: false 
    }, { 
      title: 'The Most Human Human', 
      author: 'Brian Christian', 
      alreadyRead: true 
    } 
  ];

  let seznam = document.createElement("ul")
  for( let kniha of books){
    let item = document.createElement("li");
    item.textContent = kniha.title;
    if(kniha.alreadyRead){
        item.style.fontWeight = "bold";
    }
    seznam.appendChild(item);
  }
  document.body.appendChild(seznam);

