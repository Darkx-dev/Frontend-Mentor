const rateTiles = document.querySelectorAll(".rate")
const star = document.querySelector('.starIcon');
const tl = gsap.timeline();
const tl2 = gsap.timeline({ repeat: -1, yoyo: true });

tl2.to(star, { duration: 0.2, rotate: -1, y: -1 })
  .to(star, { duration: 0.2, rotate: 1, y: 1 })
  .to(star, { duration: 0.2, rotate: -1, y: -1 })
  .to(star, { duration: 0.2, rotate: 0, y: 0 })
  .to(star, { duration: 0.2, rotate: 1, y: -2 })
  .to(star, { duration: 0.2, rotate: -1, y: 2 })
  .to(star, { duration: 0.2, rotate: 8, y: -1 })
  .to(star, { duration: 0.2, rotate: 0, y: 0 });

const buttons = document.querySelectorAll('.button');

rateTiles.forEach(button => {
    tl.fromTo(button, {
        opacity: 0,
        scale: 0.5
      }, {
        opacity: 1,
        scale: 1.6,
        duration: 0.2,
        ease: 'power1.out'
      })
      const ripple = document.createElement('div');
        ripple.classList.add('ripple');
        button.appendChild(ripple);
        let diameter = -100
        gsap.to(ripple, {
            duration: 1,
            ease: "power4.out",
            width: diameter,
            height: diameter,
            x: -diameter / 2,
            y: -diameter / 2,
            opacity: 0,
            onComplete: function() {
              // Remove the ripple element from the button
              button.removeChild(ripple);
            }})
            button.addEventListener('click', () => {
                rateTiles.forEach(btn => btn.classList.remove('rateFocus'));
                button.classList.add('rateFocus');
              });
            });
          


    
 




// Add an animation to the timeline

