
    function begin(){

        // Hide Preloader
        document.getElementById('loading').style.display = 'none'

        $(document).ready(function(){
            $(this).scrollTop(0);
        });
        
        // To manage players table
        var allPlayers = [
            {'name': 'ŁwⱫⱤĐxɀ', 'unique_id': '1649010263', 'kills': 0, 'assists': 0, 'mvps': 0, 'cost': 1300, 'team': 'W.T.F', 'team_leader': 'WarPanda1411', 'matches': 0, 'matches': 0},
            {'name': 'Untamed-Beast', 'unique_id': '1662010014', 'kills': 0, 'assists': 0, 'mvps': 0, 'cost': 2100, 'team': 'Akatsuki', 'team_leader': 'BlazeYash', 'matches': 0, 'matches': 0},
            {'name': 'CaptainAmerica1st10', 'unique_id': '1651017518', 'kills': 0, 'assists': 0, 'mvps': 0, 'cost': 0, 'team': 'Akatsuki', 'team_leader': 'BlazeYash', 'matches': 0, 'matches': 0},
            {'name': 'Death_Rain', 'unique_id': '1693010082', 'kills': 0, 'assists': 0, 'mvps': 0, 'cost': 800, 'team': 'W.J.P', 'team_leader': 'Mosin Nagant', 'matches': 0, 'matches': 0},
            {'name':'TORGxxV3NOM', 'unique_id': '1673010472', 'kills': 0, 'assists': 0, 'mvps': 0,  'cost': 'N.A', 'team': 'Saste Nashedi', 'team_leader':'TORGxxV3NOM', 'matches': 0, 'matches': 0},
            {'name': 'ansh21', 'unique_id': '1675011571', 'kills': 0, 'assists': 0, 'mvps': 0, 'cost': 600, 'team': 'Akatsuki', 'team_leader': 'BlazeYash', 'matches': 0, 'matches': 0},
            {'name': 'Avenger3876', 'unique_id': '1696010223', 'kills': 0, 'assists': 0, 'mvps': 0, 'cost': 600, 'team': 'Hakuna Matata', 'team_leader': 'Venkatnithin', 'matches': 0},
            {'name': 'WillyWilder', 'unique_id': '1668011380', 'kills': 0, 'assists': 0, 'mvps': 0, 'cost': 0, 'team': 'Variants', 'team_leader': 'Knull', 'matches': 0},
            {'name': 'HeroFighterX', 'unique_id': '1685010341', 'kills': 0, 'assists': 0, 'mvps': 0, 'cost': 850, 'team': 'W.T.F', 'team_leader': 'WarPanda1411', 'matches': 0},
            {'name': '**$PØID¥**', 'unique_id': '1677015036', 'kills': 0, 'assists': 0, 'mvps': 0, 'cost': 500, 'team': 'W.J.P', 'team_leader': 'Mosin Nagant', 'matches': 0},
            {'name': 'Raw ninja', 'unique_id': '1622010071', 'kills': 0, 'assists': 0, 'mvps': 0, 'cost': 2200, 'team': 'Variants',   'team_leader': 'Knull', 'matches': 0},
            {'name': 'TangyLoops', 'unique_id': '1678010039', 'kills': 0, 'assists': 0, 'mvps': 0, 'cost': 1100, 'team': 'Saste Nashedi', 'team_leader':'TORGxxV3NOM', 'matches': 0},
            {'name': 'Moriorinvictus', 'unique_id': '1625011182', 'kills': 0, 'assists': 0, 'mvps': 0, 'cost': 500, 'team': 'Hakuna Matata', 'team_leader': 'Venkatnithin', 'matches': 0},
            {'name': 'yumraj', 'unique_id': '1670010336', 'kills': 0, 'assists': 0, 'mvps': 0, 'cost': 1850, 'team': 'Variants', 'team_leader': 'Knull', 'matches': 0},
            {'name': 'THANOS_KILLER', 'unique_id': '1682010500', 'kills': 0, 'assists': 0, 'mvps': 0,  'cost': 'N.A', 'team': 'Sinister Six', 'team_leader': 'THANOS_KILLER', 'matches': 0},
            {'name': '_MaNN_', 'unique_id': '1631017516', 'kills': 0, 'assists': 0, 'mvps': 0, 'cost': 300, 'team': 'Sinister Six', 'team_leader': 'THANOS_KILLER', 'matches': 0},
            {'name': 'Dudefella', 'unique_id': '1692010075', 'kills': 0, 'assists': 0, 'mvps': 0, 'cost': 1300, 'team': 'Saste Nashedi', 'team_leader':'TORGxxV3NOM', 'matches': 0},
            {'name': 'Soulx7', 'unique_id': '1669012539', 'kills': 0, 'assists': 0, 'mvps': 0, 'cost': 1900, 'team': 'Saste Nashedi', 'team_leader':'TORGxxV3NOM', 'matches': 0},
            {'name': 'ROBELL', 'unique_id': '1686014036', 'kills': 0, 'assists': 0, 'mvps': 0, 'cost': 1600, 'team': 'Akatsuki', 'team_leader': 'BlazeYash', 'matches': 0},
            {'name': 'Knull', 'unique_id': '1651010519', 'kills': 0, 'assists': 0, 'mvps': 0,  'cost': 'N.A', 'team': 'Variants', 'team_leader': 'Knull', 'matches': 0},
            {'name': 'Ꭰᥲʀκ ⊰ŠԩąƉŏώ⊱', 'unique_id': '1675016747', 'kills': 0, 'assists': 0, 'mvps': 0, 'cost': 700, 'team': 'W.T.F', 'team_leader': 'WarPanda1411', 'matches': 0},
            {'name': 'Haroon', 'unique_id': '1667010085', 'kills': 0, 'assists': 0, 'mvps': 0, 'cost': 550, 'team': 'Akatsuki', 'team_leader': 'BlazeYash', 'matches': 0},
            {'name': 'dharmesh_1', 'unique_id': '1627013414', 'kills': 0, 'assists': 0, 'mvps': 0, 'cost': 300, 'team': 'Hakuna Matata', 'team_leader': 'Venkatnithin', 'matches': 0},
            {'name': 'KrAatos', 'unique_id': '1644012635', 'kills': 0, 'assists': 0, 'mvps': 0, 'cost': 1300, 'team': 'W.T.F', 'team_leader': 'WarPanda1411', 'matches': 0},
            {'name': 'WarPanda1411', 'unique_id': '1682011689', 'kills': 0, 'assists': 0, 'mvps': 0,  'cost': 'N.A', 'team': 'W.T.F', 'team_leader': 'WarPanda1411', 'matches': 0},
            {'name': 'CosTspy', 'unique_id': '1684012071', 'kills': 0, 'assists': 0, 'mvps': 0, 'cost': 1200, 'team': 'Hakuna Matata', 'team_leader': 'Venkatnithin', 'matches': 0},
            {'name': 'BlazeYash', 'unique_id': '1694011560', 'kills': 0, 'assists': 0, 'mvps': 0, 'cost': 'Leaeer', 'team': 'Akatsuki', 'team_leader': 'BlazeYash', 'matches': 0},
            {'name': 'Royal Predator', 'unique_id': '1654017420', 'kills': 0, 'assists': 0, 'mvps': 0, 'cost': 650, 'team': 'Variants', 'team_leader': 'Knull', 'matches': 0},
            {'name': 'GuaRdian', 'unique_id': '1686010267', 'kills': 0, 'assists': 0, 'mvps': 0, 'cost': 300, 'team': 'W.J.P', 'team_leader': 'Mosin Nagant', 'matches': 0},
            {'name': 'Venkatnithin', 'unique_id': '1673012931', 'kills': 0, 'assists': 0, 'mvps': 0,  'cost': 'N.A', 'team': 'Hakuna Matata', 'team_leader': 'Venkatnithin', 'matches': 0},
            {'name': 'Krishna', 'unique_id': '1636014234', 'kills': 0, 'assists': 0, 'mvps': 0, 'cost': 800, 'team': 'Sinister Six', 'team_leader': 'THANOS_KILLER', 'matches': 0},
            {'name': 'Mosin Nagant', 'unique_id': '1658012734 ', 'kills': 0, 'assists': 0, 'mvps': 0,  'cost': 'N.A', 'team': 'W.J.P', 'team_leader': 'Mosin Nagant', 'matches': 0},
            {'name': 'i,mironman1000 ', 'unique_id': '1680014638 ', 'kills': 0, 'assists': 0, 'mvps': 0, 'cost': 300, 'team': 'Variants', 'team_leader': 'Knull', 'matches': 0},
            {'name': 'AdDYYT', 'unique_id': '1673011503 ', 'kills': 0, 'assists': 0, 'mvps': 0, 'cost': 1800, 'team': 'Hakuna Matata', 'team_leader': 'Venkatnithin', 'matches': 0},
            {'name': 'Whitestone1000', 'unique_id': '1695014180 ', 'kills': 0, 'assists': 0, 'mvps': 0, 'cost': 0, 'team': 'W.J.P', 'team_leader': 'Mosin Nagant', 'matches': 0},
            {'name': 'Smith1001', 'unique_id': '1649014497 ', 'kills': 0, 'assists': 0, 'mvps': 0, 'cost': 0, 'team': 'Sinister Six', 'team_leader': 'THANOS_KILLER', 'matches': 0},
            {'name': 'mann...', 'unique_id': '1631017516 ', 'kills': 0, 'assists': 0, 'mvps': 0, 'cost': 300, 'team': 'Sinister Six', 'team_leader': 'THANOS_KILLER', 'matches': 0},
            {'name': 'TheQuake', 'unique_id': '1642010296 ', 'kills': 0, 'assists': 0, 'mvps': 0, 'cost': 1450, 'team': 'Sinister Six', 'team_leader': 'THANOS_KILLER', 'matches': 0},
            {'name': 'King', 'unique_id': '1678013240 ', 'kills': 0, 'assists': 0, 'mvps': 0, 'cost': 350, 'team': 'W.J.P', 'team_leader': 'Mosin Nagant', 'matches': 0},
            {'name': 'Titan Hyper', 'unique_id': '1688015852 ', 'kills': 0, 'assists': 0, 'mvps': 0, 'cost': 300, 'team': 'W.T.F', 'team_leader': 'WarPanda1411', 'matches': 0},
            {'name': 'kingKrrish', 'unique_id': '1677010089 ', 'kills': 0, 'assists': 0, 'mvps': 0, 'cost': 0, 'team': 'Saste Nashedi', 'team_leader':'TORGxxV3NOM', 'matches': 0},
            {'name': 'Silence', 'unique_id': '1650010341 ', 'kills': 0, 'assists': 0, 'mvps': 0, 'cost': 700, 'team': 'Saste Nashedi', 'team_leader':'TORGxxV3NOM', 'matches': 0},
            {'name': 'CELESTIAL', 'unique_id': '1690013998 ', 'kills': 0, 'assists': 0, 'mvps': 0, 'cost': 450, 'team': 'W.T.F', 'team_leader': 'WarPanda1411', 'matches': 0},
            {'name': 'Krishparihar', 'unique_id': '1664010434 ', 'kills': 0, 'assists': 0, 'mvps': 0, 'cost': 0, 'team': 'Akatsuki', 'team_leader': 'BlazeYash', 'matches': 0},
            {'name': 'Annihilus', 'unique_id': '- ', 'kills': 0, 'assists': 0, 'mvps': 0, 'cost': 3050, 'team': 'W.J.P', 'team_leader': 'Mosin Nagant', 'matches': 0},
            {'name': 'Ratededge', 'unique_id': '1659011162 ', 'kills': 0, 'assists': 0, 'mvps': 0, 'cost': 0, 'team': 'Hakuna Matata', 'team_leader': 'Venkatnithin', 'matches': 0},
            {'name': 'Cricket0123', 'unique_id': '1634012544 ', 'kills': 0, 'assists': 0, 'mvps': 0, 'cost': 700, 'team': 'Saste Nashedi', 'team_leader':'TORGxxV3NOM', 'matches': 0},
            {'name': 'I AM IRON MAN', 'unique_id': ' 1646017315 ', 'kills': 0, 'assists': 0, 'mvps': 0, 'cost': 750, 'team': 'Sinister Six', 'team_leader': 'THANOS_KILLER', 'matches': 0}
        ]
        buildPlayersTable(allPlayers);
        buildMostKillsTable(allPlayers);
        buildMostAssistsTable(allPlayers);
        buildMostMVPsTable(allPlayers);

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
                                <td><button class="player-card-button">${players[i].name}</button></td>
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

        function sortByProperty(players, propertyName) {
            return players.sort(function (a, b) {
                if ( a[propertyName] < b[propertyName] )
                    return 1;
                if ( a[propertyName] > b[propertyName] )
                    return -1;
                return 0;
            });
        }

        // Event Listener for the card
        $('.player-card-button').click(function(e){
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
        });

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
    }
