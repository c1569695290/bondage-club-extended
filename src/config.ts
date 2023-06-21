/* eslint-disable quote-props */
export const VERSION = BCX_VERSION;

export const VERSION_CHECK_BOT: number = 37685;

// Server commit: b894fce7856593d16850721febc44b09c2ec94f7

// Game commit: 212266401f9d784878f82e4f7486648f146296ca
export const SUPPORTED_BC_VERSIONS: readonly string[] = [
	"R93",
];

export const FUNCTION_HASHES: Record<string, string[]> = {
	"Player.CanChangeClothesOn": ["40EF5292"],
	"Player.GetBlindLevel": ["FDE144D9"],
	"Player.GetBlurLevel": ["F6930456", "BFF08A45"],
	"Player.GetDeafLevel": ["42CB6D63"],
	"Player.HasTints": ["E09CA942", "F1F63BF9"],
	"Player.IsSlow": ["6E60F118"],
	ActivityCheckPrerequisite: ["AADA5EE5"],
	ActivityOrgasmPrepare: ["D49DAC9B"],
	ActivityOrgasmStart: ["0BD14BED"],
	AppearanceClick: ["723EA7F1"],
	AppearanceExit: ["AA300341"],
	AppearanceGetPreviewImageColor: ["4B9707B3"],
	AppearanceMenuBuild: ["94B77E20"],
	AppearanceMenuClick: ["E5E76A96"],
	AppearanceMenuDraw: ["28FDF65B"],
	AppearanceRun: ["0BBDEE59"],
	AsylumEntranceCanWander: ["A85C35F3"],
	AsylumGGTSClick: ["E5660C8C"],
	AsylumGGTSLoad: ["DAB62F12"],
	BackgroundSelectionRun: ["F7AF6FF2"],
	CharacterAppearanceGenderAllowed: ["8A2D647F"],
	CharacterAppearanceLoadCharacter: ["387F9BEF"],
	CharacterCanChangeToPose: ["F55FE4B0"],
	CharacterCanKneel: ["A5A325E3"],
	CharacterLoadCanvas: ["BA6AD4FF"],
	CharacterLoadEffect: ["BD6B6B4D"],
	CharacterNickname: ["A794EFF5"],
	ChatAdminClick: ["D4354B95", "A15E13F5"],
	ChatAdminExit: ["EC263A9C"],
	ChatAdminLoad: ["BC01235B"],
	ChatAdminRun: ["1E16EBC7"],
	ChatCreateClick: ["8794FE74"],
	ChatCreateExit: ["6FF19445"],
	ChatCreateLoad: ["DC3CF453"],
	ChatCreateRun: ["007553E0"],
	ChatRoomAddCharacterToChatRoom: ["FD2725F4"],
	ChatRoomAdminAction: ["86DE8F3C"],
	ChatRoomCanAttemptKneel: ["0AA710FA"],
	ChatRoomCanAttemptStand: ["026065D0"],
	ChatRoomCanBeLeashedBy: ["749EBE4E"],
	ChatRoomCanLeave: ["7065F82F"],
	ChatRoomClearAllElements: ["C49AA2C1"],
	ChatRoomClickCharacter: ["715D92A0"],
	ChatRoomCreateElement: ["9A3FD548"],
	ChatRoomDrawBackground: ["597B062C"],
	ChatRoomDrawCharacter: ["8ED3DF88"],
	ChatRoomDrawCharacterOverlay: ["06FB4CC3"],
	ChatRoomFirstTimeHelp: ["078BEEA9"],
	ChatRoomGetFocusGroupSubstitutions: ["04FB0708"],
	ChatRoomIsOwnedByPlayer: ["82640FF9"],
	ChatRoomKeyDown: ["B4BFDB0C"],
	ChatRoomListUpdate: ["D7FA0EC7"],
	ChatRoomLovershipOptionIs: ["6F5CE6A0"],
	ChatRoomMenuClick: ["4E8B3A64"],
	ChatRoomMenuDraw: ["0B8B0944"],
	ChatRoomMessage: ["BBD61334"],
	ChatRoomMessageDefaultMetadataExtractor: ["E8718964"],
	ChatRoomOwnershipOptionIs: ["FE060F0B"],
	ChatRoomRun: ["77FAE23C"],
	ChatRoomSendChat: ["7F540ED0"],
	ChatRoomSendEmote: ["6EF53CBA"],
	ChatRoomShouldBlockGaggedOOCMessage: ["16D6AED5"],
	ChatRoomStatusUpdate: ["35DA12E0"],
	ChatRoomSync: ["BC146A3E"],
	ChatRoomSyncMemberLeave: ["A95EADE6"],
	ChatRoomTarget: ["C76C5E33"],
	ChatRoomUpdateDisplay: ["8DFC494A"],
	ChatSearchJoin: ["22514B80"],
	ChatSearchLoad: ["05A059CF"],
	ChatSearchNormalDraw: ["66BF1158"],
	ChatSearchRun: ["64BCF8FB"],
	CheatFactor: ["594CFC45"],
	CheatImport: ["26C67608"],
	ColorPickerDraw: ["D1E82FB3"],
	CommandParse: ["C9061FE8"],
	CommonKeyDown: ["0F27218B"],
	CommonSetScreen: ["E2AC00F4"],
	DialogCanUnlock: ["0881FEFF"],
	DialogClickExpressionMenu: ["6497E698"],
	DialogDrawItemMenu: ["FCE556C2"],
	DialogFindPlayer: ["32851FF2"],
	DialogInventoryAdd: ["A0FD4697"],
	DialogInventoryBuild: ["A4A5BA06"],
	DialogItemClick: ["FAC6259A"],
	DialogChangeFocusToGroup: ["257B7857"],
	DialogMenuButtonBuild: ["F0360ADB"],
	DialogMenuButtonClick: ["9D46EE8F"],
	DrawArousalMeter: ["DC0BB5B4"],
	DrawCharacter: ["B54922F5"],
	DrawGetImage: ["BEC7B0DA"],
	DrawImageEx: ["3D3D74F5"],
	DrawProcess: ["4B2BE17E"],
	DrawStatus: ["FD747092"],
	FriendListBeepMenuSend: ["B81A695E"],
	FriendListClick: ["6B039C7C"],
	FriendListLoadFriendList: ["1F8A29E2"],
	FriendListRun: ["051E747B"],
	InfiltrationStealItems: ["1F601756"],
	InformationSheetClick: ["E535609B"],
	InformationSheetExit: ["29FF58C9"],
	InformationSheetRun: ["E248ADC7"],
	InventoryItemNeckAccessoriesCollarAutoShockUnitDetectSpeech: ["441EAEBF"],
	ItemColorReset: ["8FD17CAC"],
	ItemColorStateBuild: ["0CD125D8"],
	LoginMistressItems: ["B58EF410"],
	LoginResponse: ["DB977132"],
	LoginStableItems: ["EA93FBF7"],
	LogValue: ["6ED63114"],
	MainHallMaidsDisabledBegForMore: ["EA29F2B3"],
	MainHallWalk: ["E52553C4"],
	ManagementCanBeClubSlave: ["2A5CC4E5"],
	ManagementCanBeReleased: ["A2E2CA35"],
	ManagementCanBeReleasedOnline: ["3374263B"],
	ManagementCanBreakDatingLoverOnline: ["366AECAE"],
	ManagementCanBreakTrialOnline: ["51E9B7F4", "2CBA193D"],
	ManagementCanBreakUpLoverOnline: ["92E30200"],
	ManagementCannotBeReleased: ["755DB909"],
	ManagementCannotBeReleasedExtreme: ["2DA1650E"],
	ManagementCannotBeReleasedOnline: ["D1ACE212"],
	PreferenceIsPlayerInSensDep: ["1DB1238E"],
	PreferenceSubscreenDifficultyClick: ["3882E581"],
	PreferenceSubscreenDifficultyRun: ["65BF560F"],
	PrivateRansomStart: ["511E91C6"],
	PropertyAutoPunishParseMessage: ["B0B55044"],
	ServerAccountBeep: ["F16771D4"],
	ServerPlayerIsInChatRoom: ["E3771112"],
	ServerSend: ["90A61F57"],
	SpeechGarble: ["9D669F73"],
	SpeechGetTotalGagLevel: ["C55B705A"],
	StableGenericDrawProgress: ["6BACDAA2"],
	StruggleDrawStrengthProgress: ["4755C02D"],
	StruggleStrengthDraw: ["4406AD10"],
	TextGet: ["4DDE5794"],
	ValidationCanAddOrRemoveItem: ["80E3D94D"],
	ValidationResolveModifyDiff: ["5D9FA740"],
	WardrobeClick: ["E96F7F63"],
	WardrobeGroupAccessible: ["2D406A64"],
	WardrobeRun: ["9616EB3A"],
};
