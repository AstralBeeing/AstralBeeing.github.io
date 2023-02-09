import kaboom from "https://unpkg.com/kaboom/dist/kaboom.mjs";

// initialize kaboom context
kaboom();

loadSprite("kartka","obrazek.png")
loadSprite("mikolaj","mikolaj.png")

loadSound("muzyka","doszopy.mp3")

add([
    sprite("kartka"),
    pos(0,0)
])

const mikolaj = add([
    sprite("mikolaj"),
    pos(609,250),
  //  body(),
    //area()
])



//mikolaj.jump()

loop(1, ()=>{
    mikolaj.pos.y = mikolaj.pos.y +2
    mikolaj.pos.y= mikolaj.pos.y -2
})
add([
    play("muzyka")
])
onUpdate(()=>{



     if (mikolaj.pos.x > 0 && mikolaj.pos.y > 100) 
    
     {
        
         mikolaj.pos.x = mikolaj.pos.x - 0.4
    
     }

    
})