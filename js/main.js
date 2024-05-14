
        var quotes = [
            "“We accept the love we think we deserve.” - Stephen Chbosky, The Perks of Being a Wallflower",
            "“Without music, life would be a mistake.” - Friedrich Nietzsche, Twilight of the Idols",
            "“Be yourself; everyone else is already taken.” - Oscar Wilde",
            "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.” -  Albert Einstein",
            "You have within you right now, everything you need to deal with whatever the world can throw at you. - Brian Tracy",
            "“Be yourself; everyone else is already taken.” - Oscar Wilde",
            "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.” -  Albert Einstein",
            "You have within you right now, everything you need to deal with whatever the world can throw at you. - Brian Tracy"
        ];
        
        document.getElementById("quote").addEventListener('click', function() {
            const randomIndex = Math.floor(Math.random() * quotes.length);
            document.getElementById("des").textContent = quotes[randomIndex];
        });