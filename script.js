
        const wrapper = document.querySelector('.wrapper');
        const loginLink = document.querySelector('.login-link');
        const registerLink = document.querySelector('.register-link');
        const btnPopup = document.querySelector('.btnLogin-popup');
        const  iconclose = document.querySelector('.icon-close');
        const audio = document.getElementById('music');
        document.body.addEventListener('click', function() {
            audio.play().catch(() => {
                console.log('自动播放失败，请手动操作后再试。');
            });
        });
            


        registerLink.addEventListener('click', () => {
          wrapper.classList.add('active');
        });
        loginLink.addEventListener('click', () => {
            wrapper.classList.remove('active');
          });
        btnPopup.addEventListener('click', () => {
            wrapper.classList.add('active-popup');
          });
        iconclose.addEventListener('click', () => {
            wrapper.classList.remove('active-popup');
        });