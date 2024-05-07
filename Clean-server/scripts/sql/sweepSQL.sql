-- ###### VIEWS ####################################
-- #################################################
-- SELECT * FROM public."SP01_Services";
-- SELECT * FROM public."SP02_ServiceProperties";
SELECT * FROM public."SP03_PropertyBuildings";
-- SELECT * FROM public."SP04_Rooms";
SELECT * FROM public."SPX_TaskList";
SELECT * FROM public."SP05_ServiceRooms";
-- END #############################################

-- ###### SP01_Serivces - Load into Services #######
-- #################################################
-- DELETE FROM public."SP01_Services"
-- SELECT * FROM public."SP01_Services"; 

-- INSERT INTO public."SP01_Services" ("D1003","D1004","D1005","D1006","D1002","D1001","D1007","D1008")
-- VALUES 
-- (1,'CLE','SP04','S1','CLES1','Cleaning','/Clean','SP04_CLES1'),
-- (9,'PAI','SP07','S9','PAIS9','Paint','/Paint','SP07_PAIS9'),
-- (5,'SMA','SP05','S5','SMAS5','Small Repairs','/SmallRepairs','SP05_AddOnTask'),
-- (2,'JUN','SP05','S2','JUNS2','Junk Removal','/JunkRemoval','SP05_AddOnTask'),
-- (3,'MOV','SP05','S3','MOVS3','Move In/Out','/MoveInOut','SP05_AddOnTask'),
-- (4,'POS','SP05','S4','POSS4','Post-Renovation','/PostReno','SP05_AddOnTask'),
-- (6,'FLO','SP06','S6','FLOS6','Floors & Carpets','/FloorsCarpets','SP09_FLOS6'),
-- (7,'EXT','SP05','S7','EXTS7','External Windows','/ExtWind','SP05_AddOnTask'),
-- (8,'LAN','SP05','S8','LANS8','Landscape','/Landscape','SP05_AddOnTask');
-- END ####################################################################

-- ##### SP01_Services - Adding Columns ######
-- ############################################
-- Description
-- ALTER TABLE public."SP01_Services"
-- ADD 'D1009' text; 

-- Active and ActiveRooms
-- ALTER TABLE public."SP01_Services"
-- ADD "SP01D1010" bool;
-- UPDATE public."SP01_Services"
-- SET "SP01D1010" = TRUE;

-- ALTER TABLE public."SP01_Services"
-- ADD "SP01D1011" bool;
-- SELECT * FROM public."SP01_Services";
-- UPDATE public."SP01_Services"
-- SET "SP01D1011" = FALSE;
-- UPDATE public."SP01_Services"
-- SET "SP01D1011" = TRUE
-- WHERE "SP01D1002" = 'CLES1' OR "SP01D1002" = 'PAIS9' OR "SP01D1002" = 'FLOS6';
-- SELECT * FROM public."SP01_Services";

-- Selected
-- ALTER TABLE public."SP01_Services"
-- ADD "SP01D1020" bool;
-- UPDATE public."SP01_Services"
-- SET "SP01D1020" = FALSE;

-- SELECT * FROM public."SP01_Services";

-- UPDATE public."SP01_Services"
-- SET "D1009" = 'Place the finishing touches on your freshly renovated spaces. Tasks include scrap removal, dust cleaning, wiping surfaces, etc.'
-- WHERE "D1001" = 'Post-Renovation';

-- SELECT * FROM public."SP01_Services"
-- END ###################################################

-- ##### SP02_ServiceProperties - Initial Data Load ######
-- #######################################################
-- SELECT * FROM public."SP02_ServiceProperties";
-- INSERT INTO public."SP02_ServiceProperties" ("SP02D1003","SP02D1002","SP02D1001","SP02D1010")
-- VALUES
-- (1,'CLES1','Residential',TRUE),
-- (2,'CLES1','Commerical',TRUE),
-- (3,'CLES1','AirBnb',TRUE),
-- (4,'PAIS9','Residential',TRUE),
-- (5,'PAIS9','Commerical',TRUE),
-- (6,'PAIS9','AirBnb',TRUE),
-- (7,'SMAS5','Residential',TRUE),
-- (8,'SMAS5','Commerical',TRUE),
-- (9,'SMAS5','AirBnb',TRUE),
-- (10,'JUNS2','Residential',TRUE),
-- (11,'JUNS2','Commerical',TRUE),
-- (12,'JUNS2','AirBnb',TRUE),
-- (13,'MOVS3','Residential',TRUE),
-- (14,'MOVS3','Commerical',TRUE),
-- (15,'MOVS3','AirBnb',TRUE),
-- (16,'POSS4','Residential',TRUE),
-- (17,'POSS4','Commerical',TRUE),
-- (18,'POSS4','AirBnb',TRUE),
-- (19,'FLOS6','Residential',TRUE),
-- (20,'FLOS6','Commerical',TRUE),
-- (21,'FLOS6','AirBnb',TRUE),
-- (22,'EXTS7','Residential',TRUE),
-- (23,'EXTS7','Commerical',TRUE),
-- (24,'EXTS7','AirBnb',TRUE),
-- (25,'LANS8','Residential',TRUE),
-- (26,'LANS8','Commerical',TRUE),
-- (27,'LANS8','AirBnb',TRUE);

-- Selected
-- ALTER TABLE public."SP02_ServiceProperties"
-- ADD "SP02D1020" bool;
-- UPDATE public."SP02_ServiceProperties"
-- SET "SP02D1020" = FALSE;

-- SELECT * FROM public."SP02_ServiceProperties";
-- END ###############################################################

-- ##### SP03_PropertyBuildings - Initial Data Load ######
-- #######################################################
-- DELETE FROM public."SP03_PropertyBuildings";
-- ALTER TABLE public."SP03_PropertyBuildings"
-- ADD "SP03D1012" text;

-- SELECT * FROM public."SP03_PropertyBuildings";

-- ALTER TABLE public."SP03_PropertyBuildings"
-- ADD "SP03D1007" text;
-- UPDATE public."SP03_PropertyBuildings"
-- SET "SP03D1007" = 'CLES1';

-- ALTER TABLE public."SP03_PropertyBuildings"
-- ADD "SP03D1008" text;

-- UPDATE public."SP03_PropertyBuildings"
-- SET "SP03D1008" = CONCAT('CLES1-', public."SP03_PropertyBuildings"."SP03D1002");

-- ALTER TABLE public."SP03_PropertyBuildings"
-- ADD "SP03D1010" bool;
-- UPDATE public."SP03_PropertyBuildings"
-- SET "SP03D1010" = TRUE;

-- INSERT INTO public."SP03_PropertyBuildings" ("SP03D1003","SP03D1006","SP03D1004","SP03D1002","SP03D1012","SP03D1001")
-- VALUES
-- (1,'P1','RESHOU','RESHOUP1','Residential','House'),
-- (2,'P2','RESCON','RESCONP2','Residential','Condo-Apartment'),
-- (3,'P3','COMRES','COMRESP3','Commercial','Restaurant'),
-- (4,'P4','COMOFF','COMOFFP4','Commercial','Office'),
-- (5,'P5','COMEVE','COMEVEP5','Commercial','Event'),
-- (6,'P6','COMWAR','COMWARP6','Commercial','Warehouse'),
-- (7,'P7','COMPRO','COMPROP7','Commercial','Production Site'),
-- (8,'P8','AIRHOU','AIRHOUP8','AirBnb','House'),
-- (9,'P9','AIRCON','AIRCONP9','AirBnb','Condo-Apartment');

-- SELECT * FROM public."SP03_PropertyBuildings";

-- Added Selected
-- ALTER TABLE public."SP03_PropertyBuildings"
-- ADD "SP03D1020" bool;
-- UPDATE public."SP03_PropertyBuildings"
-- SET "SP03D1020" = FALSE;
-- SELECT * FROM public."SP03_PropertyBuildings";

-- INSERT INTO public."SP03_PropertyBuildings" ("SP03D1003","SP03D1007","SP03D1006","SP03D1004","SP03D1002","SP03D1008","SP03D1012","SP03D1001","SP03D1010","SP03D1020")
-- VALUES
-- (10,'PAIS9','P1','RESHOU','RESHOUP1','PAIS9-RESHOUP1','Residential','House',TRUE,FALSE),
-- (11,'PAIS9','P2','RESCON','RESCONP2','PAIS9-RESCONP2','Residential','Condo-Apartment',TRUE,FALSE),
-- (12,'PAIS9','P3','COMRES','COMRESP3','PAIS9-COMRESP3','Commercial','Restaurant',TRUE,FALSE),
-- (13,'PAIS9','P4','COMOFF','COMOFFP4','PAIS9-COMOFFP4','Commercial','Office',TRUE,FALSE),
-- (14,'PAIS9','P5','COMEVE','COMEVEP5','PAIS9-COMEVEP5','Commercial','Event',TRUE,FALSE),
-- (15,'PAIS9','P6','COMWAR','COMWARP6','PAIS9-COMWARP6','Commercial','Warehouse',TRUE,FALSE),
-- (16,'PAIS9','P7','COMPRO','COMPROP7','PAIS9-COMPROP7','Commercial','Production Site',TRUE,FALSE),
-- (17,'PAIS9','P8','AIRHOU','AIRHOUP8','PAIS9-AIRHOUP8','AirBnb','House',TRUE,FALSE),
-- (18,'PAIS9','P9','AIRCON','AIRCONP9','PAIS9-AIRCONP9','AirBnb','Condo-Apartment',TRUE,FALSE),
-- (19,'SMAS5','P1','RESHOU','RESHOUP1','SMAS5-RESHOUP1','Residential','House',TRUE,FALSE),
-- (20,'SMAS5','P2','RESCON','RESCONP2','SMAS5-RESCONP2','Residential','Condo-Apartment',TRUE,FALSE),
-- (21,'SMAS5','P3','COMRES','COMRESP3','SMAS5-COMRESP3','Commercial','Restaurant',TRUE,FALSE),
-- (22,'SMAS5','P4','COMOFF','COMOFFP4','SMAS5-COMOFFP4','Commercial','Office',TRUE,FALSE),
-- (23,'SMAS5','P5','COMEVE','COMEVEP5','SMAS5-COMEVEP5','Commercial','Event',TRUE,FALSE),
-- (24,'SMAS5','P6','COMWAR','COMWARP6','SMAS5-COMWARP6','Commercial','Warehouse',TRUE,FALSE),
-- (25,'SMAS5','P7','COMPRO','COMPROP7','SMAS5-COMPROP7','Commercial','Production Site',TRUE,FALSE),
-- (26,'SMAS5','P8','AIRHOU','AIRHOUP8','SMAS5-AIRHOUP8','AirBnb','House',TRUE,FALSE),
-- (27,'SMAS5','P9','AIRCON','AIRCONP9','SMAS5-AIRCONP9','AirBnb','Condo-Apartment',TRUE,FALSE),
-- (28,'JUNS2','P1','RESHOU','RESHOUP1','JUNS2-RESHOUP1','Residential','House',TRUE,FALSE),
-- (29,'JUNS2','P2','RESCON','RESCONP2','JUNS2-RESCONP2','Residential','Condo-Apartment',TRUE,FALSE),
-- (30,'JUNS2','P3','COMRES','COMRESP3','JUNS2-COMRESP3','Commercial','Restaurant',TRUE,FALSE),
-- (31,'JUNS2','P4','COMOFF','COMOFFP4','JUNS2-COMOFFP4','Commercial','Office',TRUE,FALSE),
-- (32,'JUNS2','P5','COMEVE','COMEVEP5','JUNS2-COMEVEP5','Commercial','Event',TRUE,FALSE),
-- (33,'JUNS2','P6','COMWAR','COMWARP6','JUNS2-COMWARP6','Commercial','Warehouse',TRUE,FALSE),
-- (34,'JUNS2','P7','COMPRO','COMPROP7','JUNS2-COMPROP7','Commercial','Production Site',TRUE,FALSE),
-- (35,'JUNS2','P8','AIRHOU','AIRHOUP8','JUNS2-AIRHOUP8','AirBnb','House',TRUE,FALSE),
-- (36,'JUNS2','P9','AIRCON','AIRCONP9','JUNS2-AIRCONP9','AirBnb','Condo-Apartment',TRUE,FALSE),
-- (37,'MOVS3','P1','RESHOU','RESHOUP1','MOVS3-RESHOUP1','Residential','House',TRUE,FALSE),
-- (38,'MOVS3','P2','RESCON','RESCONP2','MOVS3-RESCONP2','Residential','Condo-Apartment',TRUE,FALSE),
-- (39,'MOVS3','P3','COMRES','COMRESP3','MOVS3-COMRESP3','Commercial','Restaurant',TRUE,FALSE),
-- (40,'MOVS3','P4','COMOFF','COMOFFP4','MOVS3-COMOFFP4','Commercial','Office',TRUE,FALSE),
-- (41,'MOVS3','P5','COMEVE','COMEVEP5','MOVS3-COMEVEP5','Commercial','Event',TRUE,FALSE),
-- (42,'MOVS3','P6','COMWAR','COMWARP6','MOVS3-COMWARP6','Commercial','Warehouse',TRUE,FALSE),
-- (43,'MOVS3','P7','COMPRO','COMPROP7','MOVS3-COMPROP7','Commercial','Production Site',TRUE,FALSE),
-- (44,'MOVS3','P8','AIRHOU','AIRHOUP8','MOVS3-AIRHOUP8','AirBnb','House',TRUE,FALSE),
-- (45,'MOVS3','P9','AIRCON','AIRCONP9','MOVS3-AIRCONP9','AirBnb','Condo-Apartment',TRUE,FALSE),
-- (46,'POSS4','P1','RESHOU','RESHOUP1','POSS4-RESHOUP1','Residential','House',TRUE,FALSE),
-- (47,'POSS4','P2','RESCON','RESCONP2','POSS4-RESCONP2','Residential','Condo-Apartment',TRUE,FALSE),
-- (48,'POSS4','P3','COMRES','COMRESP3','POSS4-COMRESP3','Commercial','Restaurant',TRUE,FALSE),
-- (49,'POSS4','P4','COMOFF','COMOFFP4','POSS4-COMOFFP4','Commercial','Office',TRUE,FALSE),
-- (50,'POSS4','P5','COMEVE','COMEVEP5','POSS4-COMEVEP5','Commercial','Event',TRUE,FALSE),
-- (51,'POSS4','P6','COMWAR','COMWARP6','POSS4-COMWARP6','Commercial','Warehouse',TRUE,FALSE),
-- (52,'POSS4','P7','COMPRO','COMPROP7','POSS4-COMPROP7','Commercial','Production Site',TRUE,FALSE),
-- (53,'POSS4','P8','AIRHOU','AIRHOUP8','POSS4-AIRHOUP8','AirBnb','House',TRUE,FALSE),
-- (54,'POSS4','P9','AIRCON','AIRCONP9','POSS4-AIRCONP9','AirBnb','Condo-Apartment',TRUE,FALSE),
-- (55,'FLOS6','P1','RESHOU','RESHOUP1','FLOS6-RESHOUP1','Residential','House',TRUE,FALSE),
-- (56,'FLOS6','P2','RESCON','RESCONP2','FLOS6-RESCONP2','Residential','Condo-Apartment',TRUE,FALSE),
-- (57,'FLOS6','P3','COMRES','COMRESP3','FLOS6-COMRESP3','Commercial','Restaurant',TRUE,FALSE),
-- (58,'FLOS6','P4','COMOFF','COMOFFP4','FLOS6-COMOFFP4','Commercial','Office',TRUE,FALSE),
-- (59,'FLOS6','P5','COMEVE','COMEVEP5','FLOS6-COMEVEP5','Commercial','Event',TRUE,FALSE),
-- (60,'FLOS6','P6','COMWAR','COMWARP6','FLOS6-COMWARP6','Commercial','Warehouse',TRUE,FALSE),
-- (61,'FLOS6','P7','COMPRO','COMPROP7','FLOS6-COMPROP7','Commercial','Production Site',TRUE,FALSE),
-- (62,'FLOS6','P8','AIRHOU','AIRHOUP8','FLOS6-AIRHOUP8','AirBnb','House',TRUE,FALSE),
-- (63,'FLOS6','P9','AIRCON','AIRCONP9','FLOS6-AIRCONP9','AirBnb','Condo-Apartment',TRUE,FALSE),
-- (64,'EXTS7','P1','RESHOU','RESHOUP1','EXTS7-RESHOUP1','Residential','House',TRUE,FALSE),
-- (65,'EXTS7','P2','RESCON','RESCONP2','EXTS7-RESCONP2','Residential','Condo-Apartment',TRUE,FALSE),
-- (66,'EXTS7','P3','COMRES','COMRESP3','EXTS7-COMRESP3','Commercial','Restaurant',TRUE,FALSE),
-- (67,'EXTS7','P4','COMOFF','COMOFFP4','EXTS7-COMOFFP4','Commercial','Office',TRUE,FALSE),
-- (68,'EXTS7','P5','COMEVE','COMEVEP5','EXTS7-COMEVEP5','Commercial','Event',TRUE,FALSE),
-- (69,'EXTS7','P6','COMWAR','COMWARP6','EXTS7-COMWARP6','Commercial','Warehouse',TRUE,FALSE),
-- (70,'EXTS7','P7','COMPRO','COMPROP7','EXTS7-COMPROP7','Commercial','Production Site',TRUE,FALSE),
-- (71,'EXTS7','P8','AIRHOU','AIRHOUP8','EXTS7-AIRHOUP8','AirBnb','House',TRUE,FALSE),
-- (72,'EXTS7','P9','AIRCON','AIRCONP9','EXTS7-AIRCONP9','AirBnb','Condo-Apartment',TRUE,FALSE),
-- (73,'LANS8','P1','RESHOU','RESHOUP1','LANS8-RESHOUP1','Residential','House',TRUE,FALSE),
-- (74,'LANS8','P2','RESCON','RESCONP2','LANS8-RESCONP2','Residential','Condo-Apartment',TRUE,FALSE),
-- (75,'LANS8','P3','COMRES','COMRESP3','LANS8-COMRESP3','Commercial','Restaurant',TRUE,FALSE),
-- (76,'LANS8','P4','COMOFF','COMOFFP4','LANS8-COMOFFP4','Commercial','Office',TRUE,FALSE),
-- (77,'LANS8','P5','COMEVE','COMEVEP5','LANS8-COMEVEP5','Commercial','Event',TRUE,FALSE),
-- (78,'LANS8','P6','COMWAR','COMWARP6','LANS8-COMWARP6','Commercial','Warehouse',TRUE,FALSE),
-- (79,'LANS8','P7','COMPRO','COMPROP7','LANS8-COMPROP7','Commercial','Production Site',TRUE,FALSE),
-- (80,'LANS8','P8','AIRHOU','AIRHOUP8','LANS8-AIRHOUP8','AirBnb','House',TRUE,FALSE),
-- (81,'LANS8','P9','AIRCON','AIRCONP9','LANS8-AIRCONP9','AirBnb','Condo-Apartment',TRUE,FALSE);

-- SELECT * FROM public."SP03_PropertyBuildings";

-- SP03 END #############################################################

-- ##### SP04_Rooms - Initial Data Load ##################
-- #######################################################
-- INSERT INTO public."SP04_Rooms" ("SP04D1003","SP04D1002","SP04D1005","SP04D1007","SP04D1008","SP04D1004","SP04D1006","SP04D1014","SP04D1012","SP04D1013","SP04D1001","SP04D1009","SP04D1010")
-- VALUES
-- (1,'RESHOUP1-GARR1','RESHOU','P1','RESHOUP1','GAR','R1','GARR1','Residential','House','Garage','{}',TRUE),
-- (2,'RESHOUP1-KITR2','RESHOU','P1','RESHOUP1','KIT','R2','KITR2','Residential','House','Kitchen','{"General", "Deep"}',TRUE),
-- (3,'RESHOUP1-BATR3','RESHOU','P1','RESHOUP1','BAT','R3','BATR3','Residential','House','Bathroom','{}',TRUE),
-- (4,'RESHOUP1-BEDR4','RESHOU','P1','RESHOUP1','BED','R4','BEDR4','Residential','House','Bedroom','{}',TRUE),
-- (5,'RESHOUP1-LIVR5','RESHOU','P1','RESHOUP1','LIV','R5','LIVR5','Residential','House','Living Space','{}',TRUE),
-- (6,'RESHOUP1-OUTR6','RESHOU','P1','RESHOUP1','OUT','R6','OUTR6','Residential','House','Outdoor','{"General"}',TRUE),
-- (7,'RESHOUP1-DINR7','RESHOU','P1','RESHOUP1','DIN','R7','DINR7','Residential','House','Dining Space','{}',TRUE),
-- (8,'RESCONP2-KITR8','RESCON','P2','RESCONP2','KIT','R8','KITR8','Residential','Condo-Apartment','Kitchen','{"General", "Deep"}',TRUE),
-- (9,'RESCONP2-BATR9','RESCON','P2','RESCONP2','BAT','R9','BATR9','Residential','Condo-Apartment','Bathroom','{}',TRUE),
-- (10,'RESCONP2-BEDR10','RESCON','P2','RESCONP2','BED','R10','BEDR10','Residential','Condo-Apartment','Bedroom','{}',TRUE),
-- (11,'RESCONP2-DINR11','RESCON','P2','RESCONP2','DIN','R11','DINR11','Residential','Condo-Apartment','Dining Space','{}',TRUE),
-- (12,'RESCONP2-LIVR12','RESCON','P2','RESCONP2','LIV','R12','LIVR12','Residential','Condo-Apartment','Living Space','{}',TRUE),
-- (13,'RESCONP2-STOR13','RESCON','P2','RESCONP2','STO','R13','STOR13','Residential','Condo-Apartment','Storage Locker','{}',TRUE),
-- (14,'COMRESP3-KITR14','COMRES','P3','COMRESP3','KIT','R14','KITR14','Commercial','Restaurant','Kitchen','{"General", "Deep"}',TRUE),
-- (15,'COMRESP3-DINR15','COMRES','P3','COMRESP3','DIN','R15','DINR15','Commercial','Restaurant','Dining Space','{}',TRUE),
-- (16,'COMRESP3-BATR16','COMRES','P3','COMRESP3','BAT','R16','BATR16','Commercial','Restaurant','Bathroom','{}',TRUE),
-- (17,'COMRESP3-LANR17','COMRES','P3','COMRESP3','LAN','R17','LANR17','Commercial','Restaurant','Landscape','{}',TRUE),
-- (18,'COMRESP3-PARR18','COMRES','P3','COMRESP3','PAR','R18','PARR18','Commercial','Restaurant','Parking Lot','{}',TRUE),
-- (19,'COMOFFP4-KITR19','COMOFF','P4','COMOFFP4','KIT','R19','KITR19','Commercial','Office','Kitchen','{"General", "Deep"}',TRUE),
-- (20,'COMOFFP4-BATR20','COMOFF','P4','COMOFFP4','BAT','R20','BATR20','Commercial','Office','Bathroom','{}',TRUE),
-- (21,'COMOFFP4-LANR21','COMOFF','P4','COMOFFP4','LAN','R21','LANR21','Commercial','Office','Landscape','{}',TRUE),
-- (22,'COMOFFP4-PARR22','COMOFF','P4','COMOFFP4','PAR','R22','PARR22','Commercial','Office','Parking Lot','{}',TRUE),
-- (23,'COMOFFP4-LOBR23','COMOFF','P4','COMOFFP4','LOB','R23','LOBR23','Commercial','Office','Lobby','{}',TRUE),
-- (48,'COMOFFP4-BRER48','COMOFF','P4','COMOFFP4','BRE','R48','BRER48','Commercial','Office','Breakroom','{}',TRUE),
-- (49,'COMOFFP4-WORR49','COMOFF','P4','COMOFFP4','WOR','R49','WORR49','Commercial','Office','Work Stations','{}',TRUE),
-- (24,'COMEVEP5-KITR24','COMEVE','P5','COMEVEP5','KIT','R24','KITR24','Commercial','Event','Kitchen','{"General", "Deep"}',TRUE),
-- (25,'COMEVEP5-DINR25','COMEVE','P5','COMEVEP5','DIN','R25','DINR25','Commercial','Event','Dining Space','{}',TRUE),
-- (26,'COMEVEP5-BATR26','COMEVE','P5','COMEVEP5','BAT','R26','BATR26','Commercial','Event','Bathroom','{}',TRUE),
-- (27,'COMEVEP5-LANR27','COMEVE','P5','COMEVEP5','LAN','R27','LANR27','Commercial','Event','Landscape','{}',TRUE),
-- (28,'COMEVEP5-PARR28','COMEVE','P5','COMEVEP5','PAR','R28','PARR28','Commercial','Event','Parking Lot','{}',TRUE),
-- (29,'COMWARP6-BATR29','COMWAR','P6','COMWARP6','BAT','R29','BATR29','Commercial','Warehouse','Bathroom','{}',TRUE),
-- (30,'COMWARP6-KITR30','COMWAR','P6','COMWARP6','KIT','R30','KITR30','Commercial','Warehouse','Kitchen','{"General", "Deep"}',TRUE),
-- (31,'COMWARP6-BRER31','COMWAR','P6','COMWARP6','BRE','R31','BRER31','Commercial','Warehouse','Breakroom','{}',TRUE),
-- (32,'COMPROP7-BATR32','COMPRO','P7','COMPROP7','BAT','R32','BATR32','Commercial','Production Site','Bathroom','{}',TRUE),
-- (33,'COMPROP7-KITR33','COMPRO','P7','COMPROP7','KIT','R33','KITR33','Commercial','Production Site','Kitchen','{"General", "Deep"}',TRUE),
-- (34,'COMPROP7-BRER34','COMPRO','P7','COMPROP7','BRE','R34','BRER34','Commercial','Production Site','Breakroom','{}',TRUE),
-- (35,'AIRHOUP8-DINR35','AIRHOU','P8','AIRHOUP8','DIN','R35','DINR35','AirBnb','House','Dining Space','{}',TRUE),
-- (36,'AIRHOUP8-KITR36','AIRHOU','P8','AIRHOUP8','KIT','R36','KITR36','AirBnb','House','Kitchen','{"General", "Deep"}',TRUE),
-- (37,'AIRHOUP8-BATR37','AIRHOU','P8','AIRHOUP8','BAT','R37','BATR37','AirBnb','House','Bathroom','{}',TRUE),
-- (38,'AIRHOUP8-BEDR38','AIRHOU','P8','AIRHOUP8','BED','R38','BEDR38','AirBnb','House','Bedroom','{}',TRUE),
-- (39,'AIRHOUP8-LIVR39','AIRHOU','P8','AIRHOUP8','LIV','R39','LIVR39','AirBnb','House','Living Space','{}',TRUE),
-- (40,'AIRHOUP8-OUTR40','AIRHOU','P8','AIRHOUP8','OUT','R40','OUTR40','AirBnb','House','Outdoor','{"General"}',TRUE),
-- (41,'AIRHOUP8-GARR41','AIRHOU','P8','AIRHOUP8','GAR','R41','GARR41','AirBnb','House','Garage','{}',TRUE),
-- (42,'AIRCONP9-DINR42','AIRCON','P9','AIRCONP9','DIN','R42','DINR42','AirBnb','Condo-Apartment','Dining Space','{}',TRUE),
-- (43,'AIRCONP9-KITR43','AIRCON','P9','AIRCONP9','KIT','R43','KITR43','AirBnb','Condo-Apartment','Kitchen','{"General", "Deep"}',TRUE),
-- (44,'AIRCONP9-BATR44','AIRCON','P9','AIRCONP9','BAT','R44','BATR44','AirBnb','Condo-Apartment','Bathroom','{}',TRUE),
-- (45,'AIRCONP9-BEDR45','AIRCON','P9','AIRCONP9','BED','R45','BEDR45','AirBnb','Condo-Apartment','Bedroom','{}',TRUE),
-- (46,'AIRCONP9-LIVR46','AIRCON','P9','AIRCONP9','LIV','R46','LIVR46','AirBnb','Condo-Apartment','Living Space','{}',TRUE),
-- (47,'AIRCONP9-STOR47','AIRCON','P9','AIRCONP9','STO','R47','STOR47','AirBnb','Condo-Apartment','Storage Locker','{}',TRUE);

-- SELECT * FROM public."SP04_Rooms";

-- ALTER TABLE public."SP04_Rooms"
-- ADD "SP04D1011" text;
-- UPDATE public."SP04_Rooms"
-- SET "SP04D1011" = 'CLES1';

-- ALTER TABLE public."SP04_Rooms"
-- ADD "SP04D1015" text;
-- UPDATE public."SP04_Rooms"
-- SET "SP04D1015" = CONCAT(public."SP04_Rooms"."SP04D1011", '-', public."SP04_Rooms"."SP04D1002");

-- ALTER TABLE public."SP04_Rooms"
-- ADD "SP04D1020" bool;
-- UPDATE public."SP04_Rooms"
-- SET "SP04D1020" = FALSE;

-- SELECT * FROM public."SP04_Rooms";

-- INSERT INTO public."SP04_Rooms" 

-- Removing Selected and Service Key and SerProBuiRoom Key, moving to SP05
-- ALTER TABLE public."SP04_Rooms"
-- DROP COLUMN "SP04D1011";
-- ALTER TABLE public."SP04_Rooms"
-- DROP COLUMN "SP04D1015";
-- ALTER TABLE public."SP04_Rooms"
-- DROP COLUMN "SP041020";

-- SELECT * FROM public."SP04_Rooms";


-- SP04 END ##############################################################################################

-- ##### SP05_Rooms - Initial Data Load ##################
-- #######################################################

-- CREATE TABLE public."SP05_ServiceRooms"
-- (
--     "SP05_id" integer NOT NULL GENERATED ALWAYS AS IDENTITY,
--     "SP05D1003" integer,
-- 	"SP05D1011" text,
-- 	"SP05D1002" text,
-- 	"SP05D1015" text,
-- 	"SP05D1005" text,
-- 	"SP05D1007" text,
-- 	"SP05D1008" text,
-- 	"SP05D1004" text,
-- 	"SP05D1006" text,
-- 	"SP05D1014" text,
-- 	"SP05D1012" text,
-- 	"SP05D1013" text,
-- 	"SP05D1001" text,
-- 	"SP05D1009" text[],
-- 	"SP05D1010" bool,
-- 	"SP05D1020" bool
-- );

-- ALTER TABLE IF EXISTS public."SP05_ServiceRooms"
--     OWNER to postgres;

-- SELECT * FROM public."SP05_ServiceRooms";

-- INSERT INTO public."SP05_ServiceRooms" ("SP05D1003","SP05D1011","SP05D1002","SP05D1015","SP05D1005","SP05D1007","SP05D1008","SP05D1004","SP05D1006","SP05D1014","SP05D1012","SP05D1013","SP05D1001","SP05D1009","SP05D1010","SP05D1020")
-- VALUES
-- (1,'CLES1','RESHOUP1-GARR1','CLES1-RESHOUP1-GARR1','RESHOU','P1','RESHOUP1','GAR','R1','GARR1','Residential','House','Garage','{}',TRUE,FALSE),
-- (2,'CLES1','RESHOUP1-KITR2','CLES1-RESHOUP1-KITR2','RESHOU','P1','RESHOUP1','KIT','R2','KITR2','Residential','House','Kitchen','{"General", "Deep"}',TRUE,FALSE),
-- (3,'CLES1','RESHOUP1-BATR3','CLES1-RESHOUP1-BATR3','RESHOU','P1','RESHOUP1','BAT','R3','BATR3','Residential','House','Bathroom','{}',TRUE,FALSE),
-- (4,'CLES1','RESHOUP1-BEDR4','CLES1-RESHOUP1-BEDR4','RESHOU','P1','RESHOUP1','BED','R4','BEDR4','Residential','House','Bedroom','{}',TRUE,FALSE),
-- (5,'CLES1','RESHOUP1-LIVR5','CLES1-RESHOUP1-LIVR5','RESHOU','P1','RESHOUP1','LIV','R5','LIVR5','Residential','House','Living Space','{}',TRUE,FALSE),
-- (6,'CLES1','RESHOUP1-OUTR6','CLES1-RESHOUP1-OUTR6','RESHOU','P1','RESHOUP1','OUT','R6','OUTR6','Residential','House','Outdoor','{"General"}',TRUE,FALSE),
-- (7,'CLES1','RESHOUP1-DINR7','CLES1-RESHOUP1-DINR7','RESHOU','P1','RESHOUP1','DIN','R7','DINR7','Residential','House','Dining Space','{}',TRUE,FALSE),
-- (8,'CLES1','RESCONP2-KITR8','CLES1-RESCONP2-KITR8','RESCON','P2','RESCONP2','KIT','R8','KITR8','Residential','Condo-Apartment','Kitchen','{"General", "Deep"}',TRUE,FALSE),
-- (9,'CLES1','RESCONP2-BATR9','CLES1-RESCONP2-BATR9','RESCON','P2','RESCONP2','BAT','R9','BATR9','Residential','Condo-Apartment','Bathroom','{}',TRUE,FALSE),
-- (10,'CLES1','RESCONP2-BEDR10','CLES1-RESCONP2-BEDR10','RESCON','P2','RESCONP2','BED','R10','BEDR10','Residential','Condo-Apartment','Bedroom','{}',TRUE,FALSE),
-- (11,'CLES1','RESCONP2-DINR11','CLES1-RESCONP2-DINR11','RESCON','P2','RESCONP2','DIN','R11','DINR11','Residential','Condo-Apartment','Dining Space','{}',TRUE,FALSE),
-- (12,'CLES1','RESCONP2-LIVR12','CLES1-RESCONP2-LIVR12','RESCON','P2','RESCONP2','LIV','R12','LIVR12','Residential','Condo-Apartment','Living Space','{}',TRUE,FALSE),
-- (13,'CLES1','RESCONP2-STOR13','CLES1-RESCONP2-STOR13','RESCON','P2','RESCONP2','STO','R13','STOR13','Residential','Condo-Apartment','Storage Locker','{}',TRUE,FALSE),
-- (14,'CLES1','COMRESP3-KITR14','CLES1-COMRESP3-KITR14','COMRES','P3','COMRESP3','KIT','R14','KITR14','Commercial','Restaurant','Kitchen','{"General", "Deep"}',TRUE,FALSE),
-- (15,'CLES1','COMRESP3-DINR15','CLES1-COMRESP3-DINR15','COMRES','P3','COMRESP3','DIN','R15','DINR15','Commercial','Restaurant','Dining Space','{}',TRUE,FALSE),
-- (16,'CLES1','COMRESP3-BATR16','CLES1-COMRESP3-BATR16','COMRES','P3','COMRESP3','BAT','R16','BATR16','Commercial','Restaurant','Bathroom','{}',TRUE,FALSE),
-- (17,'CLES1','COMRESP3-LANR17','CLES1-COMRESP3-LANR17','COMRES','P3','COMRESP3','LAN','R17','LANR17','Commercial','Restaurant','Landscape','{}',TRUE,FALSE),
-- (18,'CLES1','COMRESP3-PARR18','CLES1-COMRESP3-PARR18','COMRES','P3','COMRESP3','PAR','R18','PARR18','Commercial','Restaurant','Parking Lot','{}',TRUE,FALSE),
-- (19,'CLES1','COMOFFP4-KITR19','CLES1-COMOFFP4-KITR19','COMOFF','P4','COMOFFP4','KIT','R19','KITR19','Commercial','Office','Kitchen','{"General", "Deep"}',TRUE,FALSE),
-- (20,'CLES1','COMOFFP4-BATR20','CLES1-COMOFFP4-BATR20','COMOFF','P4','COMOFFP4','BAT','R20','BATR20','Commercial','Office','Bathroom','{}',TRUE,FALSE),
-- (21,'CLES1','COMOFFP4-LANR21','CLES1-COMOFFP4-LANR21','COMOFF','P4','COMOFFP4','LAN','R21','LANR21','Commercial','Office','Landscape','{}',TRUE,FALSE),
-- (22,'CLES1','COMOFFP4-PARR22','CLES1-COMOFFP4-PARR22','COMOFF','P4','COMOFFP4','PAR','R22','PARR22','Commercial','Office','Parking Lot','{}',TRUE,FALSE),
-- (23,'CLES1','COMOFFP4-LOBR23','CLES1-COMOFFP4-LOBR23','COMOFF','P4','COMOFFP4','LOB','R23','LOBR23','Commercial','Office','Lobby','{}',TRUE,FALSE),
-- (48,'CLES1','COMOFFP4-BRER48','CLES1-COMOFFP4-BRER48','COMOFF','P4','COMOFFP4','BRE','R48','BRER48','Commercial','Office','Breakroom','{}',TRUE,FALSE),
-- (49,'CLES1','COMOFFP4-WORR49','CLES1-COMOFFP4-WORR49','COMOFF','P4','COMOFFP4','WOR','R49','WORR49','Commercial','Office','Work Stations','{}',TRUE,FALSE),
-- (24,'CLES1','COMEVEP5-KITR24','CLES1-COMEVEP5-KITR24','COMEVE','P5','COMEVEP5','KIT','R24','KITR24','Commercial','Event','Kitchen','{"General", "Deep"}',TRUE,FALSE),
-- (25,'CLES1','COMEVEP5-DINR25','CLES1-COMEVEP5-DINR25','COMEVE','P5','COMEVEP5','DIN','R25','DINR25','Commercial','Event','Dining Space','{}',TRUE,FALSE),
-- (26,'CLES1','COMEVEP5-BATR26','CLES1-COMEVEP5-BATR26','COMEVE','P5','COMEVEP5','BAT','R26','BATR26','Commercial','Event','Bathroom','{}',TRUE,FALSE),
-- (27,'CLES1','COMEVEP5-LANR27','CLES1-COMEVEP5-LANR27','COMEVE','P5','COMEVEP5','LAN','R27','LANR27','Commercial','Event','Landscape','{}',TRUE,FALSE),
-- (28,'CLES1','COMEVEP5-PARR28','CLES1-COMEVEP5-PARR28','COMEVE','P5','COMEVEP5','PAR','R28','PARR28','Commercial','Event','Parking Lot','{}',TRUE,FALSE),
-- (29,'CLES1','COMWARP6-BATR29','CLES1-COMWARP6-BATR29','COMWAR','P6','COMWARP6','BAT','R29','BATR29','Commercial','Warehouse','Bathroom','{}',TRUE,FALSE),
-- (30,'CLES1','COMWARP6-KITR30','CLES1-COMWARP6-KITR30','COMWAR','P6','COMWARP6','KIT','R30','KITR30','Commercial','Warehouse','Kitchen','{"General", "Deep"}',TRUE,FALSE),
-- (31,'CLES1','COMWARP6-BRER31','CLES1-COMWARP6-BRER31','COMWAR','P6','COMWARP6','BRE','R31','BRER31','Commercial','Warehouse','Breakroom','{}',TRUE,FALSE),
-- (32,'CLES1','COMPROP7-BATR32','CLES1-COMPROP7-BATR32','COMPRO','P7','COMPROP7','BAT','R32','BATR32','Commercial','Production Site','Bathroom','{}',TRUE,FALSE),
-- (33,'CLES1','COMPROP7-KITR33','CLES1-COMPROP7-KITR33','COMPRO','P7','COMPROP7','KIT','R33','KITR33','Commercial','Production Site','Kitchen','{"General", "Deep"}',TRUE,FALSE),
-- (34,'CLES1','COMPROP7-BRER34','CLES1-COMPROP7-BRER34','COMPRO','P7','COMPROP7','BRE','R34','BRER34','Commercial','Production Site','Breakroom','{}',TRUE,FALSE),
-- (35,'CLES1','AIRHOUP8-DINR35','CLES1-AIRHOUP8-DINR35','AIRHOU','P8','AIRHOUP8','DIN','R35','DINR35','AirBnb','House','Dining Space','{}',TRUE,FALSE),
-- (36,'CLES1','AIRHOUP8-KITR36','CLES1-AIRHOUP8-KITR36','AIRHOU','P8','AIRHOUP8','KIT','R36','KITR36','AirBnb','House','Kitchen','{"General", "Deep"}',TRUE,FALSE),
-- (37,'CLES1','AIRHOUP8-BATR37','CLES1-AIRHOUP8-BATR37','AIRHOU','P8','AIRHOUP8','BAT','R37','BATR37','AirBnb','House','Bathroom','{}',TRUE,FALSE),
-- (38,'CLES1','AIRHOUP8-BEDR38','CLES1-AIRHOUP8-BEDR38','AIRHOU','P8','AIRHOUP8','BED','R38','BEDR38','AirBnb','House','Bedroom','{}',TRUE,FALSE),
-- (39,'CLES1','AIRHOUP8-LIVR39','CLES1-AIRHOUP8-LIVR39','AIRHOU','P8','AIRHOUP8','LIV','R39','LIVR39','AirBnb','House','Living Space','{}',TRUE,FALSE),
-- (40,'CLES1','AIRHOUP8-OUTR40','CLES1-AIRHOUP8-OUTR40','AIRHOU','P8','AIRHOUP8','OUT','R40','OUTR40','AirBnb','House','Outdoor','{"General"}',TRUE,FALSE),
-- (41,'CLES1','AIRHOUP8-GARR41','CLES1-AIRHOUP8-GARR41','AIRHOU','P8','AIRHOUP8','GAR','R41','GARR41','AirBnb','House','Garage','{}',TRUE,FALSE),
-- (42,'CLES1','AIRCONP9-DINR42','CLES1-AIRCONP9-DINR42','AIRCON','P9','AIRCONP9','DIN','R42','DINR42','AirBnb','Condo-Apartment','Dining Space','{}',TRUE,FALSE),
-- (43,'CLES1','AIRCONP9-KITR43','CLES1-AIRCONP9-KITR43','AIRCON','P9','AIRCONP9','KIT','R43','KITR43','AirBnb','Condo-Apartment','Kitchen','{"General", "Deep"}',TRUE,FALSE),
-- (44,'CLES1','AIRCONP9-BATR44','CLES1-AIRCONP9-BATR44','AIRCON','P9','AIRCONP9','BAT','R44','BATR44','AirBnb','Condo-Apartment','Bathroom','{}',TRUE,FALSE),
-- (45,'CLES1','AIRCONP9-BEDR45','CLES1-AIRCONP9-BEDR45','AIRCON','P9','AIRCONP9','BED','R45','BEDR45','AirBnb','Condo-Apartment','Bedroom','{}',TRUE,FALSE),
-- (46,'CLES1','AIRCONP9-LIVR46','CLES1-AIRCONP9-LIVR46','AIRCON','P9','AIRCONP9','LIV','R46','LIVR46','AirBnb','Condo-Apartment','Living Space','{}',TRUE,FALSE),
-- (47,'CLES1','AIRCONP9-STOR47','CLES1-AIRCONP9-STOR47','AIRCON','P9','AIRCONP9','STO','R47','STOR47','AirBnb','Condo-Apartment','Storage Locker','{}',TRUE,FALSE),
-- (1,'PAIS9','RESHOUP1-GARR1','PAIS9-RESHOUP1-GARR1','RESHOU','P1','RESHOUP1','GAR','R1','GARR1','Residential','House','Garage','{}',TRUE,FALSE),
-- (2,'PAIS9','RESHOUP1-KITR2','FLOS6-RESHOUP1-KITR2','RESHOU','P1','RESHOUP1','KIT','R2','KITR2','Residential','House','Kitchen','{}',TRUE,FALSE),
-- (3,'PAIS9','RESHOUP1-BATR3','PAIS9-RESHOUP1-BATR3','RESHOU','P1','RESHOUP1','BAT','R3','BATR3','Residential','House','Bathroom','{}',TRUE,FALSE),
-- (4,'PAIS9','RESHOUP1-BEDR4','PAIS9-RESHOUP1-BEDR4','RESHOU','P1','RESHOUP1','BED','R4','BEDR4','Residential','House','Bedroom','{}',TRUE,FALSE),
-- (5,'PAIS9','RESHOUP1-LIVR5','PAIS9-RESHOUP1-LIVR5','RESHOU','P1','RESHOUP1','LIV','R5','LIVR5','Residential','House','Living Space','{}',TRUE,FALSE),
-- (6,'PAIS9','RESHOUP1-OUTR6','PAIS9-RESHOUP1-OUTR6','RESHOU','P1','RESHOUP1','OUT','R6','OUTR6','Residential','House','Outdoor','{}',TRUE,FALSE),
-- (7,'PAIS9','RESHOUP1-DINR7','PAIS9-RESHOUP1-DINR7','RESHOU','P1','RESHOUP1','DIN','R7','DINR7','Residential','House','Dining Space','{}',TRUE,FALSE),
-- (8,'PAIS9','RESCONP2-KITR8','PAIS9-RESCONP2-KITR8','RESCON','P2','RESCONP2','KIT','R8','KITR8','Residential','Condo-Apartment','Kitchen','{}',TRUE,FALSE),
-- (9,'PAIS9','RESCONP2-BATR9','PAIS9-RESCONP2-BATR9','RESCON','P2','RESCONP2','BAT','R9','BATR9','Residential','Condo-Apartment','Bathroom','{}',TRUE,FALSE),
-- (10,'PAIS9','RESCONP2-BEDR10','PAIS9-RESCONP2-BEDR10','RESCON','P2','RESCONP2','BED','R10','BEDR10','Residential','Condo-Apartment','Bedroom','{}',TRUE,FALSE),
-- (11,'PAIS9','RESCONP2-DINR11','PAIS9-RESCONP2-DINR11','RESCON','P2','RESCONP2','DIN','R11','DINR11','Residential','Condo-Apartment','Dining Space','{}',TRUE,FALSE),
-- (12,'PAIS9','RESCONP2-LIVR12','PAIS9-RESCONP2-LIVR12','RESCON','P2','RESCONP2','LIV','R12','LIVR12','Residential','Condo-Apartment','Living Space','{}',TRUE,FALSE),
-- (13,'PAIS9','RESCONP2-STOR13','PAIS9-RESCONP2-STOR13','RESCON','P2','RESCONP2','STO','R13','STOR13','Residential','Condo-Apartment','Storage Locker','{}',TRUE,FALSE),
-- (14,'PAIS9','COMRESP3-KITR14','PAIS9-COMRESP3-KITR14','COMRES','P3','COMRESP3','KIT','R14','KITR14','Commercial','Restaurant','Kitchen','{}',TRUE,FALSE),
-- (15,'PAIS9','COMRESP3-DINR15','PAIS9-COMRESP3-DINR15','COMRES','P3','COMRESP3','DIN','R15','DINR15','Commercial','Restaurant','Dining Space','{}',TRUE,FALSE),
-- (16,'PAIS9','COMRESP3-BATR16','PAIS9-COMRESP3-BATR16','COMRES','P3','COMRESP3','BAT','R16','BATR16','Commercial','Restaurant','Bathroom','{}',TRUE,FALSE),
-- (17,'PAIS9','COMRESP3-LANR17','PAIS9-COMRESP3-LANR17','COMRES','P3','COMRESP3','LAN','R17','LANR17','Commercial','Restaurant','Landscape','{}',TRUE,FALSE),
-- (18,'PAIS9','COMRESP3-PARR18','PAIS9-COMRESP3-PARR18','COMRES','P3','COMRESP3','PAR','R18','PARR18','Commercial','Restaurant','Parking Lot','{}',TRUE,FALSE),
-- (19,'PAIS9','COMOFFP4-KITR19','PAIS9-COMOFFP4-KITR19','COMOFF','P4','COMOFFP4','KIT','R19','KITR19','Commercial','Office','Kitchen','{}',TRUE,FALSE),
-- (20,'PAIS9','COMOFFP4-BATR20','PAIS9-COMOFFP4-BATR20','COMOFF','P4','COMOFFP4','BAT','R20','BATR20','Commercial','Office','Bathroom','{}',TRUE,FALSE),
-- (21,'PAIS9','COMOFFP4-LANR21','PAIS9-COMOFFP4-LANR21','COMOFF','P4','COMOFFP4','LAN','R21','LANR21','Commercial','Office','Landscape','{}',TRUE,FALSE),
-- (22,'PAIS9','COMOFFP4-PARR22','PAIS9-COMOFFP4-PARR22','COMOFF','P4','COMOFFP4','PAR','R22','PARR22','Commercial','Office','Parking Lot','{}',TRUE,FALSE),
-- (23,'PAIS9','COMOFFP4-LOBR23','PAIS9-COMOFFP4-LOBR23','COMOFF','P4','COMOFFP4','LOB','R23','LOBR23','Commercial','Office','Lobby','{}',TRUE,FALSE),
-- (48,'PAIS9','COMOFFP4-BRER48','PAIS9-COMOFFP4-BRER48','COMOFF','P4','COMOFFP4','BRE','R48','BRER48','Commercial','Office','Breakroom','{}',TRUE,FALSE),
-- (49,'PAIS9','COMOFFP4-WORR49','PAIS9-COMOFFP4-WORR49','COMOFF','P4','COMOFFP4','WOR','R49','WORR49','Commercial','Office','Work Stations','{}',TRUE,FALSE),
-- (24,'PAIS9','COMEVEP5-KITR24','PAIS9-COMEVEP5-KITR24','COMEVE','P5','COMEVEP5','KIT','R24','KITR24','Commercial','Event','Kitchen','{}',TRUE,FALSE),
-- (25,'PAIS9','COMEVEP5-DINR25','PAIS9-COMEVEP5-DINR25','COMEVE','P5','COMEVEP5','DIN','R25','DINR25','Commercial','Event','Dining Space','{}',TRUE,FALSE),
-- (26,'PAIS9','COMEVEP5-BATR26','PAIS9-COMEVEP5-BATR26','COMEVE','P5','COMEVEP5','BAT','R26','BATR26','Commercial','Event','Bathroom','{}',TRUE,FALSE),
-- (27,'PAIS9','COMEVEP5-LANR27','PAIS9-COMEVEP5-LANR27','COMEVE','P5','COMEVEP5','LAN','R27','LANR27','Commercial','Event','Landscape','{}',TRUE,FALSE),
-- (28,'PAIS9','COMEVEP5-PARR28','PAIS9-COMEVEP5-PARR28','COMEVE','P5','COMEVEP5','PAR','R28','PARR28','Commercial','Event','Parking Lot','{}',TRUE,FALSE),
-- (29,'PAIS9','COMWARP6-BATR29','PAIS9-COMWARP6-BATR29','COMWAR','P6','COMWARP6','BAT','R29','BATR29','Commercial','Warehouse','Bathroom','{}',TRUE,FALSE),
-- (30,'PAIS9','COMWARP6-KITR30','PAIS9-COMWARP6-KITR30','COMWAR','P6','COMWARP6','KIT','R30','KITR30','Commercial','Warehouse','Kitchen','{}',TRUE,FALSE),
-- (31,'PAIS9','COMWARP6-BRER31','PAIS9-COMWARP6-BRER31','COMWAR','P6','COMWARP6','BRE','R31','BRER31','Commercial','Warehouse','Breakroom','{}',TRUE,FALSE),
-- (32,'PAIS9','COMPROP7-BATR32','PAIS9-COMPROP7-BATR32','COMPRO','P7','COMPROP7','BAT','R32','BATR32','Commercial','Production Site','Bathroom','{}',TRUE,FALSE),
-- (33,'PAIS9','COMPROP7-KITR33','PAIS9-COMPROP7-KITR33','COMPRO','P7','COMPROP7','KIT','R33','KITR33','Commercial','Production Site','Kitchen','{}',TRUE,FALSE),
-- (34,'PAIS9','COMPROP7-BRER34','PAIS9-COMPROP7-BRER34','COMPRO','P7','COMPROP7','BRE','R34','BRER34','Commercial','Production Site','Breakroom','{}',TRUE,FALSE),
-- (35,'PAIS9','AIRHOUP8-DINR35','PAIS9-AIRHOUP8-DINR35','AIRHOU','P8','AIRHOUP8','DIN','R35','DINR35','AirBnb','House','Dining Space','{}',TRUE,FALSE),
-- (36,'PAIS9','AIRHOUP8-KITR36','PAIS9-AIRHOUP8-KITR36','AIRHOU','P8','AIRHOUP8','KIT','R36','KITR36','AirBnb','House','Kitchen','{}',TRUE,FALSE),
-- (37,'PAIS9','AIRHOUP8-BATR37','PAIS9-AIRHOUP8-BATR37','AIRHOU','P8','AIRHOUP8','BAT','R37','BATR37','AirBnb','House','Bathroom','{}',TRUE,FALSE),
-- (38,'PAIS9','AIRHOUP8-BEDR38','PAIS9-AIRHOUP8-BEDR38','AIRHOU','P8','AIRHOUP8','BED','R38','BEDR38','AirBnb','House','Bedroom','{}',TRUE,FALSE),
-- (39,'PAIS9','AIRHOUP8-LIVR39','PAIS9-AIRHOUP8-LIVR39','AIRHOU','P8','AIRHOUP8','LIV','R39','LIVR39','AirBnb','House','Living Space','{}',TRUE,FALSE),
-- (40,'PAIS9','AIRHOUP8-OUTR40','PAIS9-AIRHOUP8-OUTR40','AIRHOU','P8','AIRHOUP8','OUT','R40','OUTR40','AirBnb','House','Outdoor','{}',TRUE,FALSE),
-- (41,'PAIS9','AIRHOUP8-GARR41','PAIS9-AIRHOUP8-GARR41','AIRHOU','P8','AIRHOUP8','GAR','R41','GARR41','AirBnb','House','Garage','{}',TRUE,FALSE),
-- (42,'PAIS9','AIRCONP9-DINR42','PAIS9-AIRCONP9-DINR42','AIRCON','P9','AIRCONP9','DIN','R42','DINR42','AirBnb','Condo-Apartment','Dining Space','{}',TRUE,FALSE),
-- (43,'PAIS9','AIRCONP9-KITR43','PAIS9-AIRCONP9-KITR43','AIRCON','P9','AIRCONP9','KIT','R43','KITR43','AirBnb','Condo-Apartment','Kitchen','{}',TRUE,FALSE),
-- (44,'PAIS9','AIRCONP9-BATR44','PAIS9-AIRCONP9-BATR44','AIRCON','P9','AIRCONP9','BAT','R44','BATR44','AirBnb','Condo-Apartment','Bathroom','{}',TRUE,FALSE),
-- (45,'PAIS9','AIRCONP9-BEDR45','PAIS9-AIRCONP9-BEDR45','AIRCON','P9','AIRCONP9','BED','R45','BEDR45','AirBnb','Condo-Apartment','Bedroom','{}',TRUE,FALSE),
-- (46,'PAIS9','AIRCONP9-LIVR46','PAIS9-AIRCONP9-LIVR46','AIRCON','P9','AIRCONP9','LIV','R46','LIVR46','AirBnb','Condo-Apartment','Living Space','{}',TRUE,FALSE),
-- (47,'PAIS9','AIRCONP9-STOR47','PAIS9-AIRCONP9-STOR47','AIRCON','P9','AIRCONP9','STO','R47','STOR47','AirBnb','Condo-Apartment','Storage Locker','{}',TRUE,FALSE),
-- (1,'FLOS6','RESHOUP1-GARR1','FLOS6-RESHOUP1-GARR1','RESHOU','P1','RESHOUP1','GAR','R1','GARR1','Residential','House','Garage','{}',TRUE,FALSE),
-- (2,'FLOS6','RESHOUP1-KITR2','-RESHOUP1-KITR2','RESHOU','P1','RESHOUP1','KIT','R2','KITR2','Residential','House','Kitchen','{}',TRUE,FALSE),
-- (3,'FLOS6','RESHOUP1-BATR3','FLOS6-RESHOUP1-BATR3','RESHOU','P1','RESHOUP1','BAT','R3','BATR3','Residential','House','Bathroom','{}',TRUE,FALSE),
-- (4,'FLOS6','RESHOUP1-BEDR4','FLOS6-RESHOUP1-BEDR4','RESHOU','P1','RESHOUP1','BED','R4','BEDR4','Residential','House','Bedroom','{}',TRUE,FALSE),
-- (5,'FLOS6','RESHOUP1-LIVR5','FLOS6-RESHOUP1-LIVR5','RESHOU','P1','RESHOUP1','LIV','R5','LIVR5','Residential','House','Living Space','{}',TRUE,FALSE),
-- (6,'FLOS6','RESHOUP1-OUTR6','FLOS6-RESHOUP1-OUTR6','RESHOU','P1','RESHOUP1','OUT','R6','OUTR6','Residential','House','Outdoor','{}',TRUE,FALSE),
-- (7,'FLOS6','RESHOUP1-DINR7','FLOS6-RESHOUP1-DINR7','RESHOU','P1','RESHOUP1','DIN','R7','DINR7','Residential','House','Dining Space','{}',TRUE,FALSE),
-- (8,'FLOS6','RESCONP2-KITR8','FLOS6-RESCONP2-KITR8','RESCON','P2','RESCONP2','KIT','R8','KITR8','Residential','Condo-Apartment','Kitchen','{}',TRUE,FALSE),
-- (9,'FLOS6','RESCONP2-BATR9','FLOS6-RESCONP2-BATR9','RESCON','P2','RESCONP2','BAT','R9','BATR9','Residential','Condo-Apartment','Bathroom','{}',TRUE,FALSE),
-- (10,'FLOS6','RESCONP2-BEDR10','FLOS6-RESCONP2-BEDR10','RESCON','P2','RESCONP2','BED','R10','BEDR10','Residential','Condo-Apartment','Bedroom','{}',TRUE,FALSE),
-- (11,'FLOS6','RESCONP2-DINR11','FLOS6-RESCONP2-DINR11','RESCON','P2','RESCONP2','DIN','R11','DINR11','Residential','Condo-Apartment','Dining Space','{}',TRUE,FALSE),
-- (12,'FLOS6','RESCONP2-LIVR12','FLOS6-RESCONP2-LIVR12','RESCON','P2','RESCONP2','LIV','R12','LIVR12','Residential','Condo-Apartment','Living Space','{}',TRUE,FALSE),
-- (13,'FLOS6','RESCONP2-STOR13','FLOS6-RESCONP2-STOR13','RESCON','P2','RESCONP2','STO','R13','STOR13','Residential','Condo-Apartment','Storage Locker','{}',TRUE,FALSE),
-- (14,'FLOS6','COMRESP3-KITR14','FLOS6-COMRESP3-KITR14','COMRES','P3','COMRESP3','KIT','R14','KITR14','Commercial','Restaurant','Kitchen','{}',TRUE,FALSE),
-- (15,'FLOS6','COMRESP3-DINR15','FLOS6-COMRESP3-DINR15','COMRES','P3','COMRESP3','DIN','R15','DINR15','Commercial','Restaurant','Dining Space','{}',TRUE,FALSE),
-- (16,'FLOS6','COMRESP3-BATR16','FLOS6-COMRESP3-BATR16','COMRES','P3','COMRESP3','BAT','R16','BATR16','Commercial','Restaurant','Bathroom','{}',TRUE,FALSE),
-- (17,'FLOS6','COMRESP3-LANR17','FLOS6-COMRESP3-LANR17','COMRES','P3','COMRESP3','LAN','R17','LANR17','Commercial','Restaurant','Landscape','{}',TRUE,FALSE),
-- (18,'FLOS6','COMRESP3-PARR18','FLOS6-COMRESP3-PARR18','COMRES','P3','COMRESP3','PAR','R18','PARR18','Commercial','Restaurant','Parking Lot','{}',TRUE,FALSE),
-- (19,'FLOS6','COMOFFP4-KITR19','FLOS6-COMOFFP4-KITR19','COMOFF','P4','COMOFFP4','KIT','R19','KITR19','Commercial','Office','Kitchen','{}',TRUE,FALSE),
-- (20,'FLOS6','COMOFFP4-BATR20','FLOS6-COMOFFP4-BATR20','COMOFF','P4','COMOFFP4','BAT','R20','BATR20','Commercial','Office','Bathroom','{}',TRUE,FALSE),
-- (21,'FLOS6','COMOFFP4-LANR21','FLOS6-COMOFFP4-LANR21','COMOFF','P4','COMOFFP4','LAN','R21','LANR21','Commercial','Office','Landscape','{}',TRUE,FALSE),
-- (22,'FLOS6','COMOFFP4-PARR22','FLOS6-COMOFFP4-PARR22','COMOFF','P4','COMOFFP4','PAR','R22','PARR22','Commercial','Office','Parking Lot','{}',TRUE,FALSE),
-- (23,'FLOS6','COMOFFP4-LOBR23','FLOS6-COMOFFP4-LOBR23','COMOFF','P4','COMOFFP4','LOB','R23','LOBR23','Commercial','Office','Lobby','{}',TRUE,FALSE),
-- (48,'FLOS6','COMOFFP4-BRER48','FLOS6-COMOFFP4-BRER48','COMOFF','P4','COMOFFP4','BRE','R48','BRER48','Commercial','Office','Breakroom','{}',TRUE,FALSE),
-- (49,'FLOS6','COMOFFP4-WORR49','FLOS6-COMOFFP4-WORR49','COMOFF','P4','COMOFFP4','WOR','R49','WORR49','Commercial','Office','Work Stations','{}',TRUE,FALSE),
-- (24,'FLOS6','COMEVEP5-KITR24','FLOS6-COMEVEP5-KITR24','COMEVE','P5','COMEVEP5','KIT','R24','KITR24','Commercial','Event','Kitchen','{}',TRUE,FALSE),
-- (25,'FLOS6','COMEVEP5-DINR25','FLOS6-COMEVEP5-DINR25','COMEVE','P5','COMEVEP5','DIN','R25','DINR25','Commercial','Event','Dining Space','{}',TRUE,FALSE),
-- (26,'FLOS6','COMEVEP5-BATR26','FLOS6-COMEVEP5-BATR26','COMEVE','P5','COMEVEP5','BAT','R26','BATR26','Commercial','Event','Bathroom','{}',TRUE,FALSE),
-- (27,'FLOS6','COMEVEP5-LANR27','FLOS6-COMEVEP5-LANR27','COMEVE','P5','COMEVEP5','LAN','R27','LANR27','Commercial','Event','Landscape','{}',TRUE,FALSE),
-- (28,'FLOS6','COMEVEP5-PARR28','FLOS6-COMEVEP5-PARR28','COMEVE','P5','COMEVEP5','PAR','R28','PARR28','Commercial','Event','Parking Lot','{}',TRUE,FALSE),
-- (29,'FLOS6','COMWARP6-BATR29','FLOS6-COMWARP6-BATR29','COMWAR','P6','COMWARP6','BAT','R29','BATR29','Commercial','Warehouse','Bathroom','{}',TRUE,FALSE),
-- (30,'FLOS6','COMWARP6-KITR30','FLOS6-COMWARP6-KITR30','COMWAR','P6','COMWARP6','KIT','R30','KITR30','Commercial','Warehouse','Kitchen','{}',TRUE,FALSE),
-- (31,'FLOS6','COMWARP6-BRER31','FLOS6-COMWARP6-BRER31','COMWAR','P6','COMWARP6','BRE','R31','BRER31','Commercial','Warehouse','Breakroom','{}',TRUE,FALSE),
-- (32,'FLOS6','COMPROP7-BATR32','FLOS6-COMPROP7-BATR32','COMPRO','P7','COMPROP7','BAT','R32','BATR32','Commercial','Production Site','Bathroom','{}',TRUE,FALSE),
-- (33,'FLOS6','COMPROP7-KITR33','FLOS6-COMPROP7-KITR33','COMPRO','P7','COMPROP7','KIT','R33','KITR33','Commercial','Production Site','Kitchen','{}',TRUE,FALSE),
-- (34,'FLOS6','COMPROP7-BRER34','FLOS6-COMPROP7-BRER34','COMPRO','P7','COMPROP7','BRE','R34','BRER34','Commercial','Production Site','Breakroom','{}',TRUE,FALSE),
-- (35,'FLOS6','AIRHOUP8-DINR35','FLOS6-AIRHOUP8-DINR35','AIRHOU','P8','AIRHOUP8','DIN','R35','DINR35','AirBnb','House','Dining Space','{}',TRUE,FALSE),
-- (36,'FLOS6','AIRHOUP8-KITR36','FLOS6-AIRHOUP8-KITR36','AIRHOU','P8','AIRHOUP8','KIT','R36','KITR36','AirBnb','House','Kitchen','{}',TRUE,FALSE),
-- (37,'FLOS6','AIRHOUP8-BATR37','FLOS6-AIRHOUP8-BATR37','AIRHOU','P8','AIRHOUP8','BAT','R37','BATR37','AirBnb','House','Bathroom','{}',TRUE,FALSE),
-- (38,'FLOS6','AIRHOUP8-BEDR38','FLOS6-AIRHOUP8-BEDR38','AIRHOU','P8','AIRHOUP8','BED','R38','BEDR38','AirBnb','House','Bedroom','{}',TRUE,FALSE),
-- (39,'FLOS6','AIRHOUP8-LIVR39','FLOS6-AIRHOUP8-LIVR39','AIRHOU','P8','AIRHOUP8','LIV','R39','LIVR39','AirBnb','House','Living Space','{}',TRUE,FALSE),
-- (40,'FLOS6','AIRHOUP8-OUTR40','FLOS6-AIRHOUP8-OUTR40','AIRHOU','P8','AIRHOUP8','OUT','R40','OUTR40','AirBnb','House','Outdoor','{}',TRUE,FALSE),
-- (41,'FLOS6','AIRHOUP8-GARR41','FLOS6-AIRHOUP8-GARR41','AIRHOU','P8','AIRHOUP8','GAR','R41','GARR41','AirBnb','House','Garage','{}',TRUE,FALSE),
-- (42,'FLOS6','AIRCONP9-DINR42','FLOS6-AIRCONP9-DINR42','AIRCON','P9','AIRCONP9','DIN','R42','DINR42','AirBnb','Condo-Apartment','Dining Space','{}',TRUE,FALSE),
-- (43,'FLOS6','AIRCONP9-KITR43','FLOS6-AIRCONP9-KITR43','AIRCON','P9','AIRCONP9','KIT','R43','KITR43','AirBnb','Condo-Apartment','Kitchen','{}',TRUE,FALSE),
-- (44,'FLOS6','AIRCONP9-BATR44','FLOS6-AIRCONP9-BATR44','AIRCON','P9','AIRCONP9','BAT','R44','BATR44','AirBnb','Condo-Apartment','Bathroom','{}',TRUE,FALSE),
-- (45,'FLOS6','AIRCONP9-BEDR45','FLOS6-AIRCONP9-BEDR45','AIRCON','P9','AIRCONP9','BED','R45','BEDR45','AirBnb','Condo-Apartment','Bedroom','{}',TRUE,FALSE),
-- (46,'FLOS6','AIRCONP9-LIVR46','FLOS6-AIRCONP9-LIVR46','AIRCON','P9','AIRCONP9','LIV','R46','LIVR46','AirBnb','Condo-Apartment','Living Space','{}',TRUE,FALSE),
-- (47,'FLOS6','AIRCONP9-STOR47','FLOS6-AIRCONP9-STOR47','AIRCON','P9','AIRCONP9','STO','R47','STOR47','AirBnb','Condo-Apartment','Storage Locker','{}',TRUE,FALSE);

ALTER TABLE public."SP05_ServiceRooms"
ADD "SP05D1016" text;
UPDATE public."SP05_ServiceRooms"
SET "SP05D1016" = CONCAT(public."SP05_ServiceRooms"."SP05D1011",'-',public."SP05_ServiceRooms"."SP05D1008");

SELECT * FROM public."SP05_ServiceRooms";
-- SELECT * FROM public."SP05_ServiceRooms";
-- SP05 END ##################################################################################

-- #### SPX - Change Active Columns to TRUE and Add Selected Column #########################
-- ####################################################################################
-- UPDATE public."SPX_TaskList"
-- SET "SPXD1010" = TRUE;
-- ALTER TABLE public."SPX_TaskList"
-- ADD "SPXD1020" bool;
-- UPDATE public."SPX_TaskList"
-- SET "SPXD1020" = FALSE;

-- SELECT * FROM public."SPX_TaskList";

ALTER TABLE public."SPX_TaskList"
ADD "SPXD1019" text;
UPDATE public."SPX_TaskList"
SET "SPXD1019" = CONCAT(public."SPX_TaskList"."SPXD1013", '-', public."SPX_TaskList"."SPXD1018");

SELECT * FROM public."SPX_TaskList";

