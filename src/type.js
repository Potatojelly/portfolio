'use strict';
new TypeIt('.home__title--strong',{
    loop: true,
})
.pause(1000)
.move(-11)
.pause(1000)
.move(null,{to:'END'})
.go();