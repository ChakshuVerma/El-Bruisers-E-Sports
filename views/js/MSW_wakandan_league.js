
    function begin(){

        // Hide Preloader
        document.getElementById('loading').style.display = 'none'

        $(document).ready(function(){
            $(this).scrollTop(0);
        });

        var allTeams = [
            {'name': 'Emperor A', 'matches': 0, 'won': 0, 'lost': 0, 'points': 0},
            {'name': 'Emperor B', 'matches': 0, 'won': 0, 'lost': 0, 'points': 0},
            {'name': 'Inverter Todne Waale', 'matches': 0, 'won': 0, 'lost': 0, 'points': 0},
            {'name': 'SGV', 'matches': 0, 'won': 0, 'lost': 0, 'points': 0},
            {'name': 'Bichoo Gang', 'matches': 0, 'won': 0, 'lost': 0, 'points': 0},
            {'name': 'VIP SQUAD', 'matches': 0, 'won': 0, 'lost': 0, 'points': 0},
            {'name': "SGV '2'", 'matches': 0, 'won': 0, 'lost': 0, 'points': 0}
        ]

        var allPlayers = [
                                                                            // Team Emperor A
                {'name': 'EG | JorJor', 'unique_id': '1442028441', 'team': 'Emperor A', 'team_leader':'EG | JorJor', 'matches': 0, 'kills': 0, 'assists': 0, 'mvps': 0, 'svps': 0},
                {'name': 'EG | Sasuke', 'unique_id': '1448027529', 'team': 'Emperor A', 'team_leader':'EG | JorJor', 'matches': 0, 'kills': 0, 'assists': 0, 'mvps': 0, 'svps': 0},
                {'name': 'EG | Gummy', 'unique_id': '1446018924', 'team': 'Emperor A', 'team_leader':'EG | JorJor', 'matches': 0, 'kills': 0, 'assists': 0, 'mvps': 0, 'svps': 0},
                {'name': 'EG | CoCo', 'unique_id': '1458045423', 'team': 'Emperor A', 'team_leader':'EG | JorJor', 'matches': 0, 'kills': 0, 'assists': 0, 'mvps': 0, 'svps': 0},
                {'name': 'EG | GYUKY', 'unique_id': '1444034739', 'team': 'Emperor A', 'team_leader':'EG | JorJor', 'matches': 0, 'kills': 0, 'assists': 0, 'mvps': 0, 'svps': 0},
                
                                                                            // Team Emperor B
                {'name': 'EG FeaR', 'unique_id': '1446013740', 'team': 'Emperor B', 'team_leader':'EG FeaR', 'matches': 0, 'kills': 0, 'assists': 0, 'mvps': 0, 'svps': 0},
                {'name': 'EG Mishu ', 'unique_id': '1444011695', 'team': 'Emperor B', 'team_leader':'EG FeaR', 'matches': 0, 'kills': 0, 'assists': 0, 'mvps': 0, 'svps': 0},
                {'name': 'EG Azazel', 'unique_id': '1446010808', 'team': 'Emperor B', 'team_leader':'EG FeaR', 'matches': 0, 'kills': 0, 'assists': 0, 'mvps': 0, 'svps': 0},
                {'name': 'EG Spidey', 'unique_id': '1450010621', 'team': 'Emperor B', 'team_leader':'EG FeaR', 'matches': 0, 'kills': 0, 'assists': 0, 'mvps': 0, 'svps': 0},
                {'name': 'EG Bobby ', 'unique_id': '1452010778', 'team': 'Emperor B', 'team_leader':'EG FeaR', 'matches': 0, 'kills': 0, 'assists': 0, 'mvps': 0, 'svps': 0},
                {'name': 'EG Fairy ', 'unique_id': '1453039432', 'team': 'Emperor B', 'team_leader':'EG FeaR', 'matches': 0, 'kills': 0, 'assists': 0, 'mvps': 0, 'svps': 0},
                
                                                                            // Team Inverter Todne Waale
                {'name': 'STEPHENSTR4NGE', 'unique_id': '1320158825', 'team': 'Inverter Todne Waale', 'team_leader':'STEPHENSTR4NGE', 'matches': 0, 'kills': 0, 'assists': 0, 'mvps': 0, 'svps': 0},
                {'name': 'Zeus', 'unique_id': '1320185585', 'team': 'Inverter Todne Waale', 'team_leader':'STEPHENSTR4NGE', 'matches': 0, 'kills': 0, 'assists': 0, 'mvps': 0, 'svps': 0},
                {'name': '_Annihilus_', 'unique_id': '1320158850', 'team': 'Inverter Todne Waale', 'team_leader':'STEPHENSTR4NGE', 'matches': 0, 'kills': 0, 'assists': 0, 'mvps': 0, 'svps': 0},
                {'name': 'Trickster', 'unique_id': '1321174930', 'team': 'Inverter Todne Waale', 'team_leader':'STEPHENSTR4NGE', 'matches': 0, 'kills': 0, 'assists': 0, 'mvps': 0, 'svps': 0},
                {'name': 'Hybrid', 'unique_id': '1320176570', 'team': 'Inverter Todne Waale', 'team_leader':'STEPHENSTR4NGE', 'matches': 0, 'kills': 0, 'assists': 0, 'mvps': 0, 'svps': 0},
                
                                                                            // Team SGV
                {'name': '「SGV」ϟ MOONLIGHT', 'unique_id': '1320092193', 'team': 'SGV', 'team_leader':'「SGV」ϟ MOONLIGHT', 'matches': 0, 'kills': 0, 'assists': 0, 'mvps': 0, 'svps': 0},
                {'name': 'FairPIGGY', 'unique_id': '1455026351', 'team': 'SGV', 'team_leader':'「SGV」ϟ MOONLIGHT', 'matches': 0, 'kills': 0, 'assists': 0, 'mvps': 0, 'svps': 0},
                {'name': '「SGV」ϟ TuckG๏r', 'unique_id': '1458030767', 'team': 'SGV', 'team_leader':'「SGV」ϟ MOONLIGHT', 'matches': 0, 'kills': 0, 'assists': 0, 'mvps': 0, 'svps': 0},
                {'name': '「SGV」ϟ ARES', 'unique_id': '1460049877', 'team': 'SGV', 'team_leader':'「SGV」ϟ MOONLIGHT', 'matches': 0, 'kills': 0, 'assists': 0, 'mvps': 0, 'svps': 0},
                {'name': '「SGV」ϟ YOKO', 'unique_id': '1321046795', 'team': 'SGV', 'team_leader':'「SGV」ϟ MOONLIGHT', 'matches': 0, 'kills': 0, 'assists': 0, 'mvps': 0, 'svps': 0},
                {'name': 'RubberMonkey', 'unique_id': '1445010898', 'team': 'SGV', 'team_leader':'「SGV」ϟ MOONLIGHT', 'matches': 0, 'kills': 0, 'assists': 0, 'mvps': 0, 'svps': 0},
                
                                                                            // Team Bichoo Gang
                {'name': 'afkking1000', 'unique_id': '1407013786', 'team': 'Bichoo Gang', 'team_leader':'afkking1000', 'matches': 0, 'kills': 0, 'assists': 0, 'mvps': 0, 'svps': 0},
                {'name': 'CosTspy07', 'unique_id': '1320184975', 'team': 'Bichoo Gang', 'team_leader':'afkking1000', 'matches': 0, 'kills': 0, 'assists': 0, 'mvps': 0, 'svps': 0},
                {'name': 'The_UnChained', 'unique_id': '1320185286', 'team': 'Bichoo Gang', 'team_leader':'afkking1000', 'matches': 0, 'kills': 0, 'assists': 0, 'mvps': 0, 'svps': 0},
                {'name': 'Oliver_ _Queen', 'unique_id': '1320173477', 'team': 'Bichoo Gang', 'team_leader':'afkking1000', 'matches': 0, 'kills': 0, 'assists': 0, 'mvps': 0, 'svps': 0},
                {'name': 'NEMESIS', 'unique_id': '1320184000', 'team': 'Bichoo Gang', 'team_leader':'afkking1000', 'matches': 0, 'kills': 0, 'assists': 0, 'mvps': 0, 'svps': 0},
                {'name': 'white-wolf', 'unique_id': '1321177161', 'team': 'Bichoo Gang', 'team_leader':'afkking1000', 'matches': 0, 'kills': 0, 'assists': 0, 'mvps': 0, 'svps': 0},
                
                                                                            // Team VIP SQUAD
                {'name': 'VIP ™ ANDYJP', 'unique_id': '1357010288', 'team': 'VIP SQUAD', 'team_leader':'VIP ™ ANDYJP', 'matches': 0, 'kills': 0, 'assists': 0, 'mvps': 0, 'svps': 0},
                {'name': 'Simon285', 'unique_id': '1339017333', 'team': 'VIP SQUAD', 'team_leader':'VIP ™ ANDYJP', 'matches': 0, 'kills': 0, 'assists': 0, 'mvps': 0, 'svps': 0},
                {'name': 'Poutie', 'unique_id': '1338010669', 'team': 'VIP SQUAD', 'team_leader':'VIP ™ ANDYJP', 'matches': 0, 'kills': 0, 'assists': 0, 'mvps': 0, 'svps': 0},
                {'name': '地球代表1002', 'unique_id': '1446053831', 'team': 'VIP SQUAD', 'team_leader':'VIP ™ ANDYJP', 'matches': 0, 'kills': 0, 'assists': 0, 'mvps': 0, 'svps': 0},
                {'name': '.BLaNK.', 'unique_id': '1320103889', 'team': 'VIP SQUAD', 'team_leader':'VIP ™ ANDYJP', 'matches': 0, 'kills': 0, 'assists': 0, 'mvps': 0, 'svps': 0},
                {'name': '✎﹏ᴄʀɪʂ ʂᴋʏᴇᵛᶰ', 'unique_id': '1328010309', 'team': 'VIP SQUAD', 'team_leader':'VIP ™ ANDYJP', 'matches': 0, 'kills': 0, 'assists': 0, 'mvps': 0, 'svps': 0},
                
                                                                            // Team SGV ‘2’
                {'name': '「SGV」ϟ Rizzy ', 'unique_id': '1321053893', 'team': "SGV '2'", 'team_leader':'「SGV」ϟ Rizzy ', 'matches': 0, 'kills': 0, 'assists': 0, 'mvps': 0, 'svps': 0},
                {'name': '「SGV」ϟ Blood', 'unique_id': '1445015201', 'team': "SGV '2'", 'team_leader':'「SGV」ϟ Rizzy ', 'matches': 0, 'kills': 0, 'assists': 0, 'mvps': 0, 'svps': 0},
                {'name': 'Oompavillie', 'unique_id': '1449046895', 'team': "SGV '2'", 'team_leader':'「SGV」ϟ Rizzy ', 'matches': 0, 'kills': 0, 'assists': 0, 'mvps': 0, 'svps': 0},
                {'name': '一雨黝一', 'unique_id': '1454061529', 'team': "SGV '2'", 'team_leader':'「SGV」ϟ Rizzy ', 'matches': 0, 'kills': 0, 'assists': 0, 'mvps': 0, 'svps': 0},
                {'name': 'Stark22', 'unique_id': '1460010659', 'team': "SGV '2'", 'team_leader':'「SGV」ϟ Rizzy ', 'matches': 0, 'kills': 0, 'assists': 0, 'mvps': 0, 'svps': 0},
                {'name': '「SGV」ϟ AntMasteR', 'unique_id': '1321064130', 'team': "SGV '2'", 'team_leader':'「SGV」ϟ Rizzy ', 'matches': 0, 'kills': 0, 'assists': 0, 'mvps': 0, 'svps': 0}
            ]
        
        buildPlayersTable(allPlayers);
        buildMostKillsTable(allPlayers);
        buildMostAssistsTable(allPlayers);
        buildMostMVPsTable(allPlayers);
        buildMostSVPsTable(allPlayers);
        buildTeamStandingsTables(allTeams);

        function buildPlayersTable(players){
            var table = document.getElementById('players-table');
            table.innerHTML = '';

            if(players.length === 0){
                var row = `<tr>
                                <td colspan="2" style="text-align:center">No Players Found</td>
                            </tr>`
                            
                table.innerHTML += row;   
            }
            else{
                for(var i=0; i<players.length; i++){
                var row = `<tr>
                                <td><a class="player-card-button">${players[i].name}</a></td>
                                <td>${players[i].unique_id}</td>
                            </tr>`
                            
                table.innerHTML += row;
                }   
            }
        }

        function buildMostKillsTable(players){
            var table = document.getElementById('kills-table')
            table.innerHTML = '';

            var sortedArray = sortByProperty(players, "kills");

            for(var i=0; i<5; i++){
                var row = `<tr>
                                <td>${sortedArray[i].name}</td>
                                <td>${sortedArray[i].kills}</td>
                            </tr>`
                
                table.innerHTML += row;
            }
        }
        function buildMostAssistsTable(players){
            var table = document.getElementById('assists-table')
            table.innerHTML = '';

            var sortedArray = sortByProperty(players, "assists");

            for(var i=0; i<5; i++){
                var row = `<tr>
                                <td>${sortedArray[i].name}</td>
                                <td>${sortedArray[i].assists}</td>
                            </tr>`
                
                table.innerHTML += row;
            }
        }
        
        function buildMostMVPsTable(players){
            var table = document.getElementById('mvps-table')
            table.innerHTML = '';

            var sortedArray = sortByProperty(players, "mvps");

            for(var i=0; i<5; i++){
                var row = `<tr>
                                <td>${sortedArray[i].name}</td>
                                <td>${sortedArray[i].mvps}</td>
                            </tr>`
                
                table.innerHTML += row;
            }
        }

        function buildMostSVPsTable(players){
            var table = document.getElementById('svps-table')
            table.innerHTML = '';

            var sortedArray = sortByProperty(players, "svps");

            for(var i=0; i<5; i++){
                var row = `<tr>
                                <td>${sortedArray[i].name}</td>
                                <td>${sortedArray[i].svps}</td>
                            </tr>`
                
                table.innerHTML += row;
            }
        }

        function buildTeamStandingsTables(teams){
            var table = document.getElementById('team-table');
            table.innerHTML = '';

            var sortedArray = sortByProperty(teams, "points");

            for(var i=0; i<sortedArray.length; i++){
                var row = `<tr>
                                <td>${i+1}</td>
                                <td>${sortedArray[i].name}</td>
                                <td>${sortedArray[i].matches}</td>
                                <td>${sortedArray[i].won}</td>
                                <td>${sortedArray[i].lost}</td>
                                <td>${sortedArray[i].points}</td>
                            </tr>`
                
                table.innerHTML += row;
            }
        }

        $('.player-search-input-1').on('keyup', () => {
            var value = $('.player-search-input-1').val();
            value = value.trim()
            var searchResults = searchTable(value, allPlayers);
            buildPlayersTable(searchResults);
        })

        function searchTable(value, players){
            let filteredData = [];
            for(var i=0; i<players.length; i++){
                value = value.toLowerCase();
                var name = players[i].name.toLowerCase();
                var id = players[i].unique_id;

                if(name.includes(value) || id.includes(value)){
                    filteredData.push(players[i]);
                }
            }

            return filteredData;
        }

        function sortByProperty(array, propertyName) {
            return array.sort(function (a, b) {
                if ( a[propertyName] < b[propertyName] )
                    return 1;
                if ( a[propertyName] > b[propertyName] )
                    return -1;
                return 0;
            });
        }

        function setPlayerCardBackground(container, teamName){
            
            container.style.background = `url('/assets/Tournaments/MSW Wakandan League/Team Logos/${teamName}.jpeg')`
            container.style.backgroundSize = "cover"
            container.style.backgroundRepeat = "no-repeat"
            container.style.backgroundPosition = "center"
        }

        // Event Listener for the card
        $(document).on('click', '.player-card-button', function() {
            var playerName = this.innerHTML;
            var playerCardContainer = document.querySelector('.player-card-container');

            $('.player-card-container').fadeIn(300);

            playerCardContainer.style.display = "flex";
            
            var playerObj;

            for(var i=0; i<allPlayers.length; i++){
               if(allPlayers[i].name === playerName){
                   playerObj = allPlayers[i];
                   break;
               } 
            }

            playerCardContainer.innerHTML = `
                                                <div class="card">
                                                    <a class="close-card-button"><i class="fas fa-window-close fa-lg"></i></a>
                                                    <div class="box">
                                                        <div class="text">${playerObj.name}</div>
                                                        <p><b>Player ID: </b>${playerObj.unique_id}</p>
                                                        <p><b>Team: </b>${playerObj.team}</p>
                                                        <p><b>Team Leader: </b>${playerObj.team_leader}</p>
                                                        <p><b>Matches Played: </b>${playerObj.matches}</p>
                                                        <p><b>Kills: </b>${playerObj.kills}</p>
                                                        <p><b>Assists: </b>${playerObj.assists}</p>
                                                        <p><b>MVPs: </b>${playerObj.mvps}</p>
                                                        <p><b>SVPs: </b>${playerObj.svps}</p>
                                                    </div>
                                                </div>
                                            `

            setPlayerCardBackground(playerCardContainer, playerObj.team);
        });

        fillTeamCard();

        function fillTeamCard(){
            var teamCards = document.querySelectorAll('.team-card');

            for(var i=0; i<teamCards.length; i++){
                var teamName = teamCards[i].children[0].children[1].children[0].innerHTML;
                teamName = teamName.trim();

                // Get Team Members
                var teamMembers = [];
                for(var j=0; j<allPlayers.length; j++){
                    if(allPlayers[j].team === teamName){
                        teamMembers.push(allPlayers[j].name);
                    }
                }

                var teamObj;
                for(var j=0; j<allTeams.length; j++){
                    if(allTeams[j].name === teamName){
                        teamObj = allTeams[j];
                        break;
                    }
                }

                var backSide = teamCards[i].children[0].children[1].children[0];
                var backSideTeamMembers = '';
                
                for(var j=1; j<teamMembers.length; j++){
                    backSideTeamMembers +=  "<p>" + teamMembers[j] + "</p>";
                }

                backSide.innerHTML = `
                                        <div class="text">${teamName}</div>
                                        <p><b>Leader: </b>${teamMembers[0]}</p>
                                        <p><b>Members: </b>${backSideTeamMembers}</p>
                                        <br>
                                        <p><b>Matches Played: </b>${teamObj.matches}</p>
                                        <p><b>Won: </b>${teamObj.won}</p>
                                        <p><b>Lost: </b>${teamObj.lost}</p>
                                        <p><b>Points: </b>${teamObj.points}</p>
                                        
                                    `
            }
        }

        $(document).on('click', '.close-card-button', ()=>{
            $('.player-card-container').fadeOut(300);
        })
        
        $(document).on('click', '.show-info-poster', function() {
            
            var infoPosterContainer = document.querySelector('.tournament-info-poster-container');
            $('.tournament-info-poster-container').fadeIn(300);
            infoPosterContainer.style.display = "flex";
            infoPosterContainer.style.backgroundColor = "lightcyan"
        });

        $(document).on('click', '.info-poster-close-card-button', ()=>{
            $('.tournament-info-poster-container').fadeOut(300);
        })
        
        // Navbar and Scroll Up Button
        $(window).scroll(function(){
            if(this.scrollY > 1){
                $('.navbar').addClass("sticky");
            }else{
                $('.navbar').removeClass("sticky");
            }
            
            if(this.scrollY > 500){
                $('.scroll-up-btn').addClass("show");
            }else{
                $('.scroll-up-btn').removeClass("show");
            }
        });
        
        $('.navbar .menu li a').click(function(){
            $('html').css("scrollBehavior", "smooth");
        });

        $('.menu-btn').click(function(){
            $('.navbar .menu').toggleClass("active");
            $('.menu-btn i').toggleClass("active");
        });

        $('.scroll-up-btn').click(function(){
            $('html').animate({scrollTop: 0});
            $('html').css("scrollBehavior", "auto");
        });

        $('.carousel').owlCarousel({
            margin: 20,
            autoplayTimeOut: 2000,
            autoplayHoverPause: true,
            responsive: {
                0:{
                    items: 1,
                    nav: false
                },
                600:{
                    items: 2,
                    nav: false
                },
                1000:{
                    items: 3,
                    nav: false
                }
            }
        });
        $('.team-carousel').owlCarousel({
            margin: 20,
            autoplayTimeOut: 2000,
            autoplayHoverPause: true,
            loop: true,
            responsive: {
                0:{
                    items: 1,
                    nav: false
                },
                800:{
                    items: 2,
                    nav: false
                }
            }
        });
    }