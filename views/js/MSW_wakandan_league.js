
    function begin(){

        // Hide Preloader
        document.getElementById('loading').style.display = 'none'

        $(document).ready(function(){
            $(this).scrollTop(0);
        });

        var dayWiseMatchVideos = [
            "https://www.youtube.com/embed/XtFsHdHW-c4",
            "https://www.youtube.com/embed/fLwJTPgZSLI",
            "https://www.youtube.com/embed/xr3b_hgk0U0",
            "",
            "https://www.youtube.com/embed/IUd3SRVRXdk",
            "https://www.youtube.com/embed/mV2AHiIExGo",
            "",
            "https://www.youtube.com/embed/lG2fcwRKkEg",
            "https://www.youtube.com/embed/dKTWnhIXbNQ",
            "https://www.youtube.com/embed/zm1uqb3heCs",
            "https://www.youtube.com/embed/Hjd-Y3ojtMY",
            "https://www.youtube.com/embed/kbmE-YVLwZk",
            "https://www.youtube.com/embed/SoiHSs-NEi8"
        ]


        var allTeams = [
            {'name': 'Emperor A', 'matches': 12, 'won': 11, 'lost': 1, 'points': 22.0, 'group': 'A'},     
            {'name': 'Emperor B', 'matches': 10, 'won': 7, 'lost': 3, 'points': 14.0, 'group': 'B'},   
            {'name': 'Inverter Todne Waale', 'matches': 9, 'won': 6, 'lost': 3, 'points': 12.0, 'group': 'A'},    
            {'name': '~ Immortals ~', 'matches': 9, 'won': 6, 'lost': 3, 'points': 12.0, 'group': 'B'},     
            {'name': 'SGV', 'matches': 7, 'won': 4, 'lost': 3, 'points': 8.0, 'group': 'B'},
            {'name': 'Bichoo Gang', 'matches': 6, 'won': 2, 'lost': 4, 'points': 4.0, 'group': 'B'},
            {'name': 'VIP SQUAD', 'matches': 8, 'won': 4, 'lost': 4, 'points': 8.0, 'group': 'A'},
            {'name': "SGV '2'", 'matches': 6, 'won': 1, 'lost': 5, 'points': 2.0, 'group': 'A'},
            {'name': 'Vip Squad B team', 'matches': 7, 'won': 3, 'lost': 4, 'points': 6.0, 'group': 'B'},
            {'name': 'FFA Squad', 'matches': 6, 'won': 2, 'lost': 4, 'points': 4.0, 'group': 'A'},
            {'name': 'VIP Squad Team C', 'matches': 8, 'won': 5, 'lost': 3, 'points': 10.0, 'group': 'A'},
            {'name': 'FU SQUAD', 'matches': 6, 'won': 2, 'lost': 4, 'points': 4.0, 'group': 'B'},
            {'name': 'Masters of MSW', 'matches': 6, 'won': 0, 'lost': 6, 'points': 0, 'group': 'A'}
        ]

        var allPlayers = [
                                                                            // Team Emperor A
                {'name': 'EG | JorJor', 'unique_id': '1442028441', 'team': 'Emperor A', 'team_leader':'EG | JorJor', 'matches': 12, 'kills': 45, 'assists': 59, 'mvps': 3, 'svps': 0},
                {'name': 'EG | Sasuke', 'unique_id': '1448027529', 'team': 'Emperor A', 'team_leader':'EG | JorJor', 'matches': 12, 'kills': 51, 'assists': 62, 'mvps': 1, 'svps': 1},
                {'name': 'EG | Gummy', 'unique_id': '1446018924', 'team': 'Emperor A', 'team_leader':'EG | JorJor', 'matches': 12, 'kills': 30, 'assists': 80, 'mvps': 2, 'svps': 0},
                {'name': 'EG | CoCo', 'unique_id': '1458045423', 'team': 'Emperor A', 'team_leader':'EG | JorJor', 'matches': 12, 'kills': 33, 'assists': 79, 'mvps': 3, 'svps': 0},
                {'name': 'EG | GYUKY', 'unique_id': '1444034739', 'team': 'Emperor A', 'team_leader':'EG | JorJor', 'matches': 12, 'kills': 36, 'assists': 88, 'mvps': 2, 'svps': 0},
                
                                                                            // Team Emperor B
                {'name': 'EG FeaR', 'unique_id': '1446013740', 'team': 'Emperor B', 'team_leader':'EG FeaR', 'matches': 7, 'kills': 30, 'assists': 45, 'mvps': 2, 'svps': 0},
                {'name': 'EG Mishu ', 'unique_id': '1444011695', 'team': 'Emperor B', 'team_leader':'EG FeaR', 'matches': 8, 'kills': 5, 'assists': 68, 'mvps': 0, 'svps': 0},
                {'name': 'EG Azazel', 'unique_id': '1446010808', 'team': 'Emperor B', 'team_leader':'EG FeaR', 'matches': 8, 'kills': 29, 'assists': 47, 'mvps': 0, 'svps': 1},
                {'name': 'EG Spidey', 'unique_id': '1450010621', 'team': 'Emperor B', 'team_leader':'EG FeaR', 'matches': 6, 'kills': 11, 'assists': 27, 'mvps': 1, 'svps': 0},
                {'name': 'EG Bobby ', 'unique_id': '1452010778', 'team': 'Emperor B', 'team_leader':'EG FeaR', 'matches': 8, 'kills': 38, 'assists': 51, 'mvps': 1, 'svps': 2},
                {'name': 'EG Fairy ', 'unique_id': '1453039432', 'team': 'Emperor B', 'team_leader':'EG FeaR', 'matches': 3, 'kills': 17, 'assists': 27, 'mvps': 1, 'svps': 0},
                
                                                                            // Team Inverter Todne Waale
                {'name': 'STEPHENSTR4NGE', 'unique_id': '1320158825', 'team': 'Inverter Todne Waale', 'team_leader':'STEPHENSTR4NGE', 'matches': 9, 'kills': 32, 'assists': 76, 'mvps': 1, 'svps': 1},
                {'name': 'Zeus', 'unique_id': '1320185585', 'team': 'Inverter Todne Waale', 'team_leader':'STEPHENSTR4NGE', 'matches': 9, 'kills': 12, 'assists': 77, 'mvps': 0, 'svps': 1},
                {'name': '_Annihilus_', 'unique_id': '1320158850', 'team': 'Inverter Todne Waale', 'team_leader':'STEPHENSTR4NGE', 'matches': 9, 'kills': 42, 'assists': 57, 'mvps': 4, 'svps': 0},
                {'name': 'Trickster', 'unique_id': '1321174930', 'team': 'Inverter Todne Waale', 'team_leader':'STEPHENSTR4NGE', 'matches': 9, 'kills': 40, 'assists': 38, 'mvps': 0, 'svps': 1},
                {'name': 'Hybrid', 'unique_id': '1320176570', 'team': 'Inverter Todne Waale', 'team_leader':'STEPHENSTR4NGE', 'matches': 9, 'kills': 19, 'assists': 55, 'mvps': 1, 'svps': 0},
                {'name': 'Gamer_Apex', 'unique_id': '1320169915', 'team': 'Inverter Todne Waale', 'team_leader':'STEPHENSTR4NGE', 'matches': 0, 'kills': 0, 'assists': 0, 'mvps': 0, 'svps': 0},
                
                
                                                                            // Team SGV
                {'name': '「SGV」ϟ MOONLIGHT', 'unique_id': '1320092193', 'team': 'SGV', 'team_leader':'「SGV」ϟ MOONLIGHT', 'matches': 6, 'kills': 18, 'assists': 36, 'mvps': 0, 'svps': 1},
                {'name': 'FairPIGGY', 'unique_id': '1455026351', 'team': 'SGV', 'team_leader':'「SGV」ϟ MOONLIGHT', 'matches': 4, 'kills': 8, 'assists': 31, 'mvps': 0, 'svps': 0},
                {'name': '「SGV」ϟ TuckG๏r', 'unique_id': '1458030767', 'team': 'SGV', 'team_leader':'「SGV」ϟ MOONLIGHT', 'matches': 5, 'kills': 8, 'assists': 52, 'mvps': 2, 'svps': 0},
                {'name': '「SGV」ϟ ARES', 'unique_id': '1460049877', 'team': 'SGV', 'team_leader':'「SGV」ϟ MOONLIGHT', 'matches': 3, 'kills': 6, 'assists': 13, 'mvps': 0, 'svps': 0},
                {'name': '「SGV」ϟ YOKO', 'unique_id': '1321046795', 'team': 'SGV', 'team_leader':'「SGV」ϟ MOONLIGHT', 'matches': 6, 'kills': 29, 'assists': 36, 'mvps': 1, 'svps': 2},
                {'name': 'RubberMonkey', 'unique_id': '1445010898', 'team': 'SGV', 'team_leader':'「SGV」ϟ MOONLIGHT', 'matches': 5, 'kills': 22, 'assists': 36, 'mvps': 0, 'svps': 0},
                
                                                                            // Team Bichoo Gang
                {'name': 'afkking1000', 'unique_id': '1407013786', 'team': 'Bichoo Gang', 'team_leader':'afkking1000', 'matches': 5, 'kills': 34, 'assists': 13, 'mvps': 1, 'svps': 1},
                {'name': 'CosTspy07', 'unique_id': '1320184975', 'team': 'Bichoo Gang', 'team_leader':'afkking1000', 'matches': 3, 'kills': 8, 'assists': 19, 'mvps': 0, 'svps': 0},
                {'name': 'The_UnChained', 'unique_id': '1320185286', 'team': 'Bichoo Gang', 'team_leader':'afkking1000', 'matches': 5, 'kills': 12, 'assists': 42, 'mvps': 0, 'svps': 1},
                {'name': 'Oliver_ _Queen', 'unique_id': '1320173477', 'team': 'Bichoo Gang', 'team_leader':'afkking1000', 'matches': 5, 'kills': 3, 'assists': 41, 'mvps': 1, 'svps': 0},
                {'name': 'NEMESIS', 'unique_id': '1320184000', 'team': 'Bichoo Gang', 'team_leader':'afkking1000', 'matches': 3, 'kills': 5, 'assists': 14, 'mvps': 0, 'svps': 0},
                {'name': 'white-wolf', 'unique_id': '1321177161', 'team': 'Bichoo Gang', 'team_leader':'afkking1000', 'matches': 4, 'kills': 17, 'assists': 12, 'mvps': 0, 'svps': 1},
                
                                                                            // Team VIP SQUAD
                {'name': 'VIP ™ ANDYJP', 'unique_id': '1357010288', 'team': 'VIP SQUAD', 'team_leader':'VIP ™ ANDYJP', 'matches': 6, 'kills': 19, 'assists': 37, 'mvps': 1, 'svps': 0},
                {'name': 'RexXarr', 'unique_id': '1445034970', 'team': 'VIP SQUAD', 'team_leader':'VIP ™ ANDYJP', 'matches': 2, 'kills': 6, 'assists': 1, 'mvps': 0, 'svps': 0},
                {'name': 'Poutie', 'unique_id': '1338010669', 'team': 'VIP SQUAD', 'team_leader':'VIP ™ ANDYJP', 'matches': 6, 'kills': 10, 'assists': 49, 'mvps': 0, 'svps': 0},
                {'name': '地球代表1002', 'unique_id': '1446053831', 'team': 'VIP SQUAD', 'team_leader':'VIP ™ ANDYJP', 'matches': 7, 'kills': 28, 'assists': 32, 'mvps': 1, 'svps': 1},
                {'name': '.BLaNK.', 'unique_id': '1320103889', 'team': 'VIP SQUAD', 'team_leader':'VIP ™ ANDYJP', 'matches': 6, 'kills': 20, 'assists': 35, 'mvps': 1, 'svps': 1},
                {'name': '✎﹏ᴄʀɪʂ ʂᴋʏᴇᵛᶰ', 'unique_id': '1328010309', 'team': 'VIP SQUAD', 'team_leader':'VIP ™ ANDYJP', 'matches': 7, 'kills': 14, 'assists': 41, 'mvps': 1, 'svps': 1},
                
                                                                            // Team SGV ‘2’
                {'name': '「SGV」ϟ Rizzy ', 'unique_id': '1321053893', 'team': "SGV '2'", 'team_leader':'「SGV」ϟ Rizzy ', 'matches': 6, 'kills': 9, 'assists': 18, 'mvps': 0, 'svps': 1},
                {'name': '「SGV」ϟ Blood', 'unique_id': '1445015201', 'team': "SGV '2'", 'team_leader':'「SGV」ϟ Rizzy ', 'matches': 5, 'kills': 8, 'assists': 23, 'mvps': 0, 'svps': 1},
                {'name': '「SGV」ϟ Owen_Playz', 'unique_id': '1449046895', 'team': "SGV '2'", 'team_leader':'「SGV」ϟ Rizzy ', 'matches': 4, 'kills': 13, 'assists': 14, 'mvps': 1, 'svps': 0},
                {'name': '一雨黝一', 'unique_id': '1454061529', 'team': "SGV '2'", 'team_leader':'「SGV」ϟ Rizzy ', 'matches': 6, 'kills': 15, 'assists': 17, 'mvps': 0, 'svps': 3},
                {'name': 'Stark22', 'unique_id': '1460010659', 'team': "SGV '2'", 'team_leader':'「SGV」ϟ Rizzy ', 'matches': 6, 'kills': 6, 'assists': 25, 'mvps': 0, 'svps': 0},
                {'name': '「SGV」ϟ AntMasteR', 'unique_id': '1321064130', 'team': "SGV '2'", 'team_leader':'「SGV」ϟ Rizzy ', 'matches': 3, 'kills': 2, 'assists': 5, 'mvps': 0, 'svps': 0},

                                                                        // Team ~ Immortals ~
                {'name': 'S[t]a[R]', 'unique_id': '1321111415', 'team': '~ Immortals ~', 'team_leader': 'S[t]a[R]', 'matches': 9, 'kills': 38, 'assists': 41, 'mvps': 1, 'svps': 1},
                {'name': 'bobatea', 'unique_id': '1321054487', 'team': '~ Immortals ~', 'team_leader':'S[t]a[R]', 'matches': 9, 'kills': 40, 'assists': 64, 'mvps': 2, 'svps': 0},
                {'name': 'A[L]u[D]a', 'unique_id': '1453034921', 'team': '~ Immortals ~', 'team_leader':'S[t]a[R]', 'matches': 9, 'kills': 22, 'assists': 58, 'mvps': 1, 'svps': 1},
                {'name': 'CubbyM', 'unique_id': '1454029719', 'team': '~ Immortals ~', 'team_leader':'S[t]a[R]', 'matches': 9, 'kills': 27, 'assists': 71, 'mvps': 0, 'svps': 1},
                {'name': 'bigchill', 'unique_id': '1443013824', 'team': '~ Immortals ~', 'team_leader':'S[t]a[R]', 'matches': 9, 'kills': 28, 'assists': 62, 'mvps': 2, 'svps': 0},
                {'name': 'grassyy', 'unique_id': '1321102866', 'team': '~ Immortals ~', 'team_leader':'S[t]a[R]', 'matches': 0, 'kills': 0, 'assists': 0, 'mvps': 0, 'svps': 0},

                                                                        // Team Vip Squad B team
                {'name': 'SupremeViệtCộng', 'unique_id': '1329011087', 'team': 'Vip Squad B team', 'team_leader': 'SupremeViệtCộng', 'matches': 5, 'kills': 11, 'assists': 31, 'mvps': 0, 'svps': 1},
                {'name': 'zRoT', 'unique_id': '1444061279', 'team': 'Vip Squad B team', 'team_leader': 'SupremeViệtCộng', 'matches': 3, 'kills': 0, 'assists': 9, 'mvps': 0, 'svps': 0},
                {'name': 'BlackAssPussy', 'unique_id': '1457047281', 'team': 'Vip Squad B team', 'team_leader': 'SupremeViệtCộng', 'matches': 6, 'kills': 19, 'assists': 31, 'mvps': 1, 'svps': 0},
                {'name': 'Roxhersi', 'unique_id': '1320106618', 'team': 'Vip Squad B team', 'team_leader': 'SupremeViệtCộng', 'matches': 5, 'kills': 10, 'assists': 30, 'mvps': 0, 'svps': 0},
                {'name': 'Kaziiikazeee....Derk', 'unique_id': '1321158252', 'team': 'Vip Squad B team', 'team_leader': 'SupremeViệtCộng', 'matches': 6, 'kills': 14, 'assists': 32, 'mvps': 0, 'svps': 0},
                {'name': 'Wasimimamai', 'unique_id': '1458024065', 'team': 'Vip Squad B team', 'team_leader': 'SupremeViệtCộng', 'matches': 1, 'kills': 2, 'assists': 1, 'mvps': 0, 'svps': 1},

                                                                        // Team FFA Squad
                {'name': 'llclcool', 'unique_id': '1446035569', 'team': 'FFA Squad', 'team_leader': 'llclcool', 'matches': 5, 'kills': 8, 'assists': 12, 'mvps': 0, 'svps': 0},
                {'name': 'ONA', 'unique_id': '1320110800', 'team': 'FFA Squad', 'team_leader':'llclcool', 'matches': 5, 'kills': 17, 'assists': 23, 'mvps': 1, 'svps': 1},
                {'name': 'unpodifigaqua', 'unique_id': '1407012074', 'team': 'FFA Squad', 'team_leader':'llclcool', 'matches': 6, 'kills': 16, 'assists': 30, 'mvps': 0, 'svps': 2},
                {'name': 'W[I]D[O]W', 'unique_id': '1446011380', 'team': 'FFA Squad', 'team_leader':'llclcool', 'matches': 3, 'kills': 6, 'assists': 29, 'mvps': 0, 'svps': 0},
                {'name': 'TheTry®', 'unique_id': '1445047054', 'team': 'FFA Squad', 'team_leader':'llclcool', 'matches': 6, 'kills': 12, 'assists': 34, 'mvps': 0, 'svps': 1},
                {'name': 'J[E]r[R]y', 'unique_id': '1447043413', 'team': 'FFA Squad', 'team_leader':'llclcool', 'matches': 5, 'kills': 10, 'assists': 19, 'mvps': 1, 'svps': 0},

                                                                        // Team VIP Squad Team C
                {'name': 'Allpick', 'unique_id': '1321011396', 'team': 'VIP Squad Team C', 'team_leader':'Allpick', 'matches': 6, 'kills': 16, 'assists': 45, 'mvps': 0, 'svps': 0},
                {'name': 'How97', 'unique_id': '1444033588', 'team': 'VIP Squad Team C', 'team_leader':'Allpick', 'matches': 7, 'kills': 36, 'assists': 51, 'mvps': 3, 'svps': 1},
                {'name': 'VIPxFit', 'unique_id': '1442065957', 'team': 'VIP Squad Team C', 'team_leader':'Allpick', 'matches': 5, 'kills': 9, 'assists': 39, 'mvps': 0, 'svps': 1},
                {'name': 'Vortexshinobt', 'unique_id': '1321022369', 'team': 'VIP Squad Team C', 'team_leader':'Allpick', 'matches': 6, 'kills': 17, 'assists': 43, 'mvps': 0, 'svps': 1},
                {'name': 'H3art33', 'unique_id': '1444018518', 'team': 'VIP Squad Team C', 'team_leader':'Allpick', 'matches': 6, 'kills': 24, 'assists': 39, 'mvps': 0, 'svps': 0},
                {'name': 'ExtremSuper', 'unique_id': '1452021129', 'team': 'VIP Squad Team C', 'team_leader':'Allpick', 'matches': 5, 'kills': 14, 'assists': 27, 'mvps': 1, 'svps': 0},

                                                                        // Team FU SQUAD
                {'name': 'r0nz', 'unique_id': '1443040595', 'team': 'FU SQUAD', 'team_leader':'r0nz', 'matches': 4, 'kills': 11, 'assists': 12, 'mvps': 0, 'svps': 0},
                {'name': 'compassconan', 'unique_id': '1320074394', 'team': 'FU SQUAD', 'team_leader':'r0nz', 'matches': 5, 'kills': 11, 'assists': 16, 'mvps': 0, 'svps': 0},
                {'name': '「SGV」ϟ miracle', 'unique_id': '1447010677', 'team': 'FU SQUAD', 'team_leader':'r0nz', 'matches': 4, 'kills': 21, 'assists': 17, 'mvps': 1, 'svps': 2},
                {'name': '「SGV」ϟ LuvHannah ', 'unique_id': '1450021602', 'team': 'FU SQUAD', 'team_leader':'r0nz', 'matches': 5, 'kills': 4, 'assists': 15, 'mvps': 0, 'svps': 2},
                {'name': '滅煞 ', 'unique_id': '1442040303', 'team': 'FU SQUAD', 'team_leader':'r0nz', 'matches': 3, 'kills': 0, 'assists': 5, 'mvps': 0, 'svps': 0},
                {'name': '乖徒儿', 'unique_id': '1321109439', 'team': 'FU SQUAD', 'team_leader':'r0nz', 'matches': 4, 'kills': 3, 'assists': 32, 'mvps': 0, 'svps': 0},
                
                                                                        // Team Masters of MSW 
                {'name': '꧁тнeCREATOR꧂', 'unique_id': '1320186828', 'team': 'Masters of MSW', 'team_leader':'꧁тнeCREATOR꧂', 'matches': 6, 'kills': 7, 'assists': 11, 'mvps': 0, 'svps': 1},
                {'name': 'Titan lucky', 'unique_id': '1678016439', 'team': 'Masters of MSW', 'team_leader':'꧁тнeCREATOR꧂', 'matches': 5, 'kills': 10, 'assists': 5, 'mvps': 0, 'svps': 1},
                {'name': 'Titan Leo', 'unique_id': '1321186543', 'team': 'Masters of MSW', 'team_leader':'꧁тнeCREATOR꧂', 'matches': 4, 'kills': 3, 'assists': 10, 'mvps': 0, 'svps': 0},
                {'name': 'Trippyyy', 'unique_id': '1321172929', 'team': 'Masters of MSW', 'team_leader':'꧁тнeCREATOR꧂', 'matches': 5, 'kills': 1, 'assists': 10, 'mvps': 0, 'svps': 0},
                {'name': 'A$ura', 'unique_id': '1320158564', 'team': 'Masters of MSW', 'team_leader':'꧁тнeCREATOR꧂', 'matches': 6, 'kills': 6, 'assists': 8, 'mvps': 0, 'svps': 2}
            ]
        
        buildPlayersTable(allPlayers);
        buildMostKillsTable(allPlayers);
        buildMostAssistsTable(allPlayers);
        buildMostMVPsTable(allPlayers);
        buildMostSVPsTable(allPlayers);
        buildTeamStandingTables(allTeams);
        displayDayWiseMatchVideos(dayWiseMatchVideos);
        fillTeamCard();
        makeMVPList(allPlayers);


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

        function buildTeamStandingTables(allteams){
            var table = document.getElementById('team-table');
            table.innerHTML = '';
            var teams = [];

            for(var i=0; i<allteams.length; i++){
                if(allteams[i].points >= 6.0){
                    teams.push(allteams[i])
                }
            }

            var sortedArray = sortByProperty(teams, "points");

            for(var i=0; i<3; i++){
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

            for(var i=3; i<sortedArray.length; i++){
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

        function displayDayWiseMatchVideos(videoLinks){
            var allVideos = document.getElementById('previous-matches-videos');
            allVideos.innerHTML = '';

            for(var i=0; i<videoLinks.length; i++){
                if(videoLinks[i] == "")
                    continue;
                    
                var currVideo = `<div class="video-container">
                                    <div class="text">Day-${i+1}</div>
                                    <iframe width="560" height="315" src=${videoLinks[i]} id="previous-match-video" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                </div>`
                
                allVideos.innerHTML += currVideo;
            }
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

        function fillTeamCard(){
            var teamCards = document.querySelectorAll('.team-card');

            for(var i=0; i<teamCards.length; i++){
                var teamName = teamCards[i].children[0].children[1].children[0].innerHTML;
                teamName = teamName.trim();

                var teamLeader;

                // Get Team Members
                var teamMembers = [];
                for(var j=0; j<allPlayers.length; j++){
                    if(allPlayers[j].team === teamName){
                        teamLeader = allPlayers[j].team_leader;
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
                
                for(var j=0; j<teamMembers.length; j++){
                    if(teamMembers[j] === teamLeader)
                        continue;
                    backSideTeamMembers +=  "<p>" + teamMembers[j] + "</p>";
                }

                backSide.innerHTML = `
                                        <div class="text">${teamName}</div>
                                        <p><b>Leader: </b>${teamLeader}</p>
                                        <p><b>Members: </b>${backSideTeamMembers}</p>
                                        <p><b>Group: </b>${teamObj.group}</p>
                                        <br>
                                        <p><b>Matches Played: </b>${teamObj.matches}</p>
                                        <p><b>Won: </b>${teamObj.won}</p>
                                        <p><b>Lost: </b>${teamObj.lost}</p>
                                        <p><b>Points: </b>${teamObj.points}</p>
                                        
                                    `
            }
        }

        function makeMVPList(players){
            var sortedArray = sortForMVP(players);

            for(var i=0; i<sortedArray.length; i++){
                console.log(sortedArray[i].name + "  "+ sortedArray[i].kills + "     "+ sortedArray[i].assists);
            }
        }

        function sortForMVP(array){
            return array.sort(function (a, b) {
                if ( a.kills + a.assists < b.kills + b.assists)
                    return 1;
                if ( a.kills + a.assists > b.kills + b.assists)
                    return -1;
                return 0;
            });
        }

        $(document).on('click', '.close-card-button', ()=>{
            $('.player-card-container').fadeOut(300);
        })
        
        $(document).on('click', '.show-info-poster', function() {
            
            var infoPosterContainer = document.querySelector('.tournament-info-poster-container');
            $('.tournament-info-poster-container').fadeIn(300);
            infoPosterContainer.style.display = "flex";
            infoPosterContainer.style.backgroundColor = "lightcyan";
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

        $('.carousel-organizers').owlCarousel({
            margin: 20,
            autoplayTimeOut: 2000,
            autoPlayHoverPause: true,
            responsive:{
                0:{
                items:1
                },
                970:{
                    items:2
                }
            }
        });
    }
