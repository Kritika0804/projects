import React,{useEffect} from 'react'


function Menu({title,menuObject}) {
  
  useEffect(()=> {
    const allLi = document
    .querySelector('.MenuContainer ul')
    .querySelectorAll("li");

    function changeMenuActive(){
        allLi.forEach((n)=>n.classList.remove("active"));
        this.classList.add('active');
    }

    allLi.forEach(n=> n.addEventListener('click',changeMenuActive))


  },[])
//   here empty array is given so that it will only work when the page gets refreshed once
  
    return (
    <div className='MenuContainer'>
        <p className='title'>{title}</p>
        <ul>
            {
                menuObject && menuObject.map((menu)=>(
                    <li key={menu.id}><a href='#'>
                        <i>{menu.icon}</i>
                        <span>{menu.name}</span>
                    
                    </a></li>
                ))
            }
        </ul>
        
      
    </div>
  );
}

export {Menu}; 
