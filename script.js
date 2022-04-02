const button = document.getElementById('button');

        clickButton = () => {
            button.classList.add('loading');
            button.classList.remove('ready');
            document.getElementById("default").style.display = "none";
            setTimeout(() => {
                button.classList.add('complete');
                button.classList.remove('loading');
                document.getElementById("success").style.display = "inline-block";
                setTimeout(() => {
                    document.getElementById("default").style.display = "inline-block";
                    document.getElementById("success").style.display = "none";
                    button.classList.add('ready');
                    button.classList.remove('complete');
                }, 5000);
            }, 3000);
        }
