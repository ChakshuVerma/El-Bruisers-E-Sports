
    function begin(){

        // Hide Preloader
        document.getElementById('loading').style.display = 'none'

        $(document).ready(function(){
            $(this).scrollTop(0);
        });

        /* 2 points for winnning
            1 point for tie */

        var allTeams = [
            {'name': 'JB•Bumb', 'matches': 2, 'won': 1, 'lost': 1, 'draw': 0, 'points': 2.0},
            {'name': 'W.J.P', 'matches': 0, 'won': 0, 'lost': 0, 'draw': 0, 'points': 0},
            {'name': 'Horny Police', 'matches': 1, 'won': 1, 'lost': 0, 'draw': 0, 'points': 2.0},
            {'name': 'Akatsuki', 'matches': 2, 'won': 1, 'lost': 1, 'draw': 0, 'points': 2.0},
            {'name': 'Hakuna Matata', 'matches': 1, 'won': 0, 'lost': 1, 'draw': 0, 'points': 0},
            {'name': 'Puny Gods', 'matches': 0, 'won': 0, 'lost': 0, 'draw': 0, 'points': 0}
        ]

        var allPlayers = [
                                                                            // Team Torg
            {'name': 'TORGxxV3NOM', 'unique_id': '1673010472', 'kills': 1, 'assists': 14, 'mvps': 0, 'svps': 0,  'cost': 'N.A', 'team': 'JB•Bumb', 'team_leader':'TORGxxV3NOM', 'matches': 2},
            {'name': 'Avenger3876', 'unique_id': '1696010223', 'kills': 0, 'assists': 13, 'mvps': 0, 'svps': 0, 'cost': 700, 'team': 'JB•Bumb', 'team_leader': 'TORGxxV3NOM', 'matches': 2},
            {'name': 'Krishna', 'unique_id': '1636014234', 'kills': 5, 'assists': 9, 'mvps': 0, 'svps': 1, 'cost': 550, 'team': 'JB•Bumb', 'team_leader':'TORGxxV3NOM', 'matches': 2},
            {'name': 'Annihilus', 'unique_id': '1662010157', 'kills': 7, 'assists': 6, 'mvps': 1, 'svps': 0, 'cost': 3150, 'team': 'JB•Bumb', 'team_leader':'TORGxxV3NOM', 'matches': 2},
            {'name': 'CELESTIAL', 'unique_id': '1690013998 ', 'kills': 0, 'assists': 0, 'mvps': 0, 'svps': 0, 'cost': 600, 'team': 'JB•Bumb', 'team_leader':'TORGxxV3NOM', 'matches': 0},
            {'name': 'YOLO', 'unique_id': '1649010003 ', 'kills': 5, 'assists': 7, 'mvps': 0, 'svps': 0, 'cost': 'N.A', 'team': 'JB•Bumb', 'team_leader':'TORGxxV3NOM', 'matches': 2},
            {'name': 'Titan Hyper', 'unique_id': '1688015852', 'kills': 0, 'assists': 0, 'mvps': 0, 'svps': 0, 'cost': 'N.A', 'team': 'JB•Bumb', 'team_leader':'TORGxxV3NOM', 'matches': 0},
            
                                                                            // Team Mosin-Nagant
            {'name': 'Silence', 'unique_id': '1650010341 ', 'kills': 0, 'assists': 0, 'mvps': 0, 'svps': 0, 'cost': 850, 'team': 'W.J.P', 'team_leader': 'Untamed-Beast', 'matches': 0},
            {'name': 'TheQuake', 'unique_id': '1642010296 ', 'kills': 0, 'assists': 0, 'mvps': 0, 'svps': 0, 'cost': 1000, 'team': 'W.J.P', 'team_leader': 'Untamed-Beast', 'matches': 0},
            {'name': 'Mosin Nagant', 'unique_id': '1658012734 ', 'kills': 0, 'assists': 0, 'mvps': 0, 'svps': 0,  'cost': 2700, 'team': 'W.J.P', 'team_leader': 'Untamed-Beast', 'matches': 0},
            {'name': 'mann...', 'unique_id': '1631017516 ', 'kills': 0, 'assists': 0, 'mvps': 0, 'svps': 0, 'cost': 300, 'team': 'W.J.P', 'team_leader': 'Untamed-Beast', 'matches': 0},
            {'name': 'Smith1001', 'unique_id': '1649014497 ', 'kills': 0, 'assists': 0, 'mvps': 0, 'svps': 0, 'cost': 50, 'team': 'W.J.P', 'team_leader': 'Untamed-Beast', 'matches': 0},
            {'name': 'CosTspy', 'unique_id': '1684012071', 'kills': 0, 'assists': 0, 'mvps': 0, 'svps': 0, 'cost': 1300, 'team': 'W.J.P', 'team_leader': 'Untamed-Beast', 'matches': 0},
            
                                                                                // Team AdDYYt
            {'name': 'AdDYYT', 'unique_id': '1673011503 ', 'kills': 4, 'assists': 1, 'mvps': 0, 'svps': 0, 'cost': 'N.A', 'team': 'Horny Police', 'team_leader': 'AdDYYt', 'matches': 1},
            {'name': 'GuaRdian', 'unique_id': '1686010267', 'kills': 0, 'assists': 0, 'mvps': 0, 'svps': 0, 'cost': 400, 'team': 'Horny Police', 'team_leader': 'AdDYYt', 'matches': 0},
            {'name': 'KrAatos', 'unique_id': '1644012635', 'kills': 0, 'assists': 0, 'mvps': 0, 'svps': 0, 'cost': 650, 'team': 'Horny Police', 'team_leader': 'AdDYYt', 'matches': 0},
            {'name': 'Death_Rain', 'unique_id': '1693010082', 'kills': 1, 'assists': 6, 'mvps': 0, 'svps': 0, 'cost': 1000, 'team': 'Horny Police', 'team_leader': 'AdDYYt', 'matches': 1},
            {'name': 'yumraj', 'unique_id': '1670010336', 'kills': 2, 'assists': 10, 'mvps': 1, 'svps': 0, 'cost': 1550, 'team': 'Horny Police', 'team_leader': 'AdDYYt', 'matches': 1},
            {'name': 'Ꭰᥲʀκ ⊰ŠԩąƉŏώ⊱', 'unique_id': '1675016747', 'kills': 1, 'assists': 7, 'mvps': 0, 'svps': 0, 'cost': 600, 'team': 'Horny Police', 'team_leader': 'AdDYYt', 'matches': 1},
            {'name': 'Ratededge', 'unique_id': '1659011162 ', 'kills': 0, 'assists': 0, 'mvps': 0, 'svps': 0, 'cost': 600, 'team': 'Horny Police', 'team_leader': 'AdDYYt', 'matches': 0},
            {'name': 'Cricket0123', 'unique_id': '1634012544 ', 'kills': 5, 'assists': 2, 'mvps': 0, 'svps': 0, 'cost': 1750, 'team': 'Horny Police', 'team_leader': 'AdDYYt', 'matches': 1},
            
                                                                                    // Team Soulx7
            {'name': 'Soulx7', 'unique_id': '1669012539', 'kills': 4, 'assists': 15, 'mvps': 0, 'svps': 1, 'cost': 'N.A', 'team': 'Akatsuki',   'team_leader': 'Soulx7', 'matches': 2},
            {'name': 'ŁwⱫⱤĐxɀ', 'unique_id': '1649010263', 'kills': 8, 'assists': 16, 'mvps': 1, 'svps': 0, 'cost': 1250, 'team': 'Akatsuki', 'team_leader': 'Soulx7', 'matches': 2},
            {'name': 'Raw ninja', 'unique_id': '1622010071', 'kills': 9, 'assists': 10, 'mvps': 0, 'svps': 0, 'cost': 2250, 'team': 'Akatsuki',   'team_leader': 'Soulx7', 'matches': 2},
            {'name': 'ROBELL', 'unique_id': '1686014036', 'kills': 3, 'assists': 12, 'mvps': 0, 'svps': 0, 'cost': 750, 'team': 'Akatsuki',   'team_leader': 'Soulx7', 'matches': 2},
            {'name': 'CaptainAmerica1st10', 'unique_id': '1651017518', 'kills': 0, 'assists': 0, 'mvps': 0, 'svps': 0, 'cost': 50, 'team': 'Akatsuki', 'team_leader': 'Soulx7', 'matches': 0},
            {'name': 'WillyWilder', 'unique_id': '1668011380', 'kills': 0, 'assists': 0, 'mvps': 0, 'svps': 0, 'cost': 150, 'team': 'Akatsuki', 'team_leader': 'Soulx7', 'matches': 0},
            {'name': 'Royal Predator', 'unique_id': '1654017420', 'kills': 7, 'assists': 9, 'mvps': 0, 'svps': 0, 'cost': 600, 'team': 'Akatsuki', 'team_leader': 'Soulx7', 'matches': 2},
            
                                                                                    // Team Venkatnithin
            {'name': 'Venkatnithin', 'unique_id': '1673012931', 'kills': 0, 'assists': 5, 'mvps': 0, 'svps': 0,  'cost': 'N.A', 'team': 'Hakuna Matata', 'team_leader': 'Venkatnithin', 'matches': 1},
            {'name': 'King', 'unique_id': '1678013240 ', 'kills': 0, 'assists': 0, 'mvps': 0, 'svps': 0, 'cost': 500, 'team': 'Hakuna Matata', 'team_leader': 'Venkatnithin', 'matches': 0},
            {'name': 'Moriorinvictus', 'unique_id': '1625011182', 'kills': 3, 'assists': 6, 'mvps': 0, 'svps': 0, 'cost': 750, 'team': 'Hakuna Matata', 'team_leader': 'Venkatnithin', 'matches': 1},
            {'name': 'THANOS_KILLER', 'unique_id': '1682010500', 'kills': 6, 'assists': 3, 'mvps': 0, 'svps': 1,  'cost': 1000, 'team': 'Hakuna Matata', 'team_leader': 'Venkatnithin', 'matches': 1},
            {'name': 'Knull', 'unique_id': '1651010519', 'kills': 4, 'assists': 5, 'mvps': 0, 'svps': 0,  'cost': 1750, 'team': 'Hakuna Matata', 'team_leader': 'Venkatnithin', 'matches': 1},
            {'name': 'Anomandaris', 'unique_id': '-', 'kills': 2, 'assists': 4, 'mvps': 0, 'svps': 0,  'cost': 550, 'team': 'Hakuna Matata', 'team_leader': 'Venkatnithin', 'matches': 1},
            {'name': '**$PØID¥**', 'unique_id': '1677015036', 'kills': 0, 'assists': 0, 'mvps': 0, 'svps': 0, 'cost': 450, 'team': 'Hakuna Matata', 'team_leader': 'Venkatnithin', 'matches': 0},
            {'name': 'Haroon', 'unique_id': '1667010085', 'kills': 0, 'assists': 0, 'mvps': 0, 'svps': 0, 'team': 'Hakuna Matata', 'team_leader': 'Venkatnithin', 'matches': 0},
            
                                                                                    // Team TangyLoops
            {'name': 'TangyLoops', 'unique_id': '1678010039', 'kills': 0, 'assists': 0, 'mvps': 0, 'svps': 0, 'cost': 'N.A', 'team': 'Puny Gods', 'team_leader': 'Tangyloops', 'matches': 0},
            {'name': 'i,mironman1000', 'unique_id': '1680014638', 'kills': 0, 'assists': 0, 'mvps': 0, 'svps': 0, 'cost': 300, 'team': 'Puny Gods', 'team_leader': 'Tangyloops', 'matches': 0},
            {'name': 'Shazil', 'unique_id': '1661012180', 'kills': 0, 'assists': 0, 'mvps': 0, 'svps': 0, 'cost': 300, 'team': 'Puny Gods', 'team_leader': 'Tangyloops', 'matches': 0},
            {'name': 'Battlebuddha', 'unique_id': '-', 'kills': 0, 'assists': 0, 'mvps': 0, 'svps': 0, 'cost': 1350, 'team': 'Puny Gods', 'team_leader': 'Tangyloops', 'matches': 0},
            {'name': 'dharmesh_1', 'unique_id': '1627013414', 'kills': 0, 'assists': 0, 'mvps': 0, 'svps': 0, 'cost': 500, 'team': 'Puny Gods', 'team_leader': 'Tangyloops', 'matches': 0},
            {'name': 'HeroFighterX', 'unique_id': '1685010341', 'kills': 0, 'assists': 0, 'mvps': 0, 'svps': 0, 'cost': 800, 'team': 'Puny Gods', 'team_leader': 'Tangyloops', 'matches': 0},
            {'name': 'Dudefella', 'unique_id': '1692010075', 'kills': 0, 'assists': 0, 'mvps': 0, 'svps': 0, 'cost': 1450,  'team': 'Puny Gods', 'team_leader': 'Tangyloops', 'matches': 0},
            {'name': 'RohanKarir', 'unique_id': '1667012255', 'kills': 0, 'assists': 0, 'mvps': 0, 'svps': 0, 'cost': 'N.A',  'team': 'Puny Gods', 'team_leader': 'Tangyloops', 'matches': 0},
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
                                <td>${sortedArray[i].draw}</td>
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
            if(teamName === 'JB•Bumb'){
                container.style.background = "url('/assets/team_logos/JB BUMB.jpeg') "
            }
            else if(teamName === 'W.J.P'){
                container.style.background = "url('/assets/team_logos/WJP.jpeg')"
            }
            else if(teamName === 'Horny Police'){
                container.style.background = "url('/assets/team_logos/Horny Police.jpeg')"
            }
            else if(teamName === 'Akatsuki'){
                container.style.backgroundImage = "url('/assets/team_logos/Akatsuki.jpeg')"
            }
            else if(teamName === 'Hakuna Matata'){
                container.style.background = "url('/assets/team_logos/Hakuna Matata.jpeg')"
            }
            else{
                container.style.background = "url('/assets/team_logos/Puny Gods.jpeg')"
            }

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
                                                        <p><b>Highest Bid: </b>${playerObj.cost}</p>
                                                        <p><b>Matches Played: </b>${playerObj.matches}</p>
                                                        <p><b>Total Kills: </b>${playerObj.kills}</p>
                                                        <p><b>Total Assists: </b>${playerObj.assists}</p>
                                                        <p><b>Total MVP: </b>${playerObj.mvps}</p>
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
                                        <p><b>Ties: </b>${teamObj.draw}</p>
                                        <p><b>Points: </b>${teamObj.points}</p>
                                        <p><b>Position: </b>${teamObj.position}</p>
                                        
                                    `
            }
        }

        $(document).on('click', '.close-card-button', ()=>{
            var playerCardContainer = document.querySelector('.player-card-container');
            $('.player-card-container').fadeOut(300);
        })

        // Navbar and Scroll Up Button
        $(window).scroll(function(){
            if(this.scrollY > 20){
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
