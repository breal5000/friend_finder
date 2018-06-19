// Data structure that will store the friends data
var friendsArray = [
	{
		name: 'Henry',
		photo: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Ftce-live2.s3.amazonaws.com%2Fmedia%2Fmedia%2F0e1dbddb-1b12-43fb-8e3c-48311e2e021b.jpg&imgrefurl=http%3A%2F%2Fwww.thecanadianencyclopedia.ca%2Fen%2Farticle%2Fprince-harry-hrh-prince-henry-of-wales%2F&docid=MUUye1Ma3sOP5M&tbnid=94IWWG0e605miM%3A&vet=10ahUKEwikrOvs5N7bAhXJzVQKHeZVAmcQMwjBASgBMAE..i&w=1000&h=1274&client=ubuntu&bih=411&biw=1024&q=prince%20henry&ved=0ahUKEwikrOvs5N7bAhXJzVQKHeZVAmcQMwjBASgBMAE&iact=mrc&uact=8',
		scores: [
			'1',
			'5',
			'5',
			'1',
			'5',
			'5',
			'1',
			'1',
			'1',
			'5'
		]
	},
	{
		name: 'Philip',
		photo: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F170504000051-07-prince-philip-0504-restricted-exlarge-169.jpg&imgrefurl=https%3A%2F%2Fwww.cnn.com%2F2013%2F01%2F24%2Fworld%2Feurope%2Fprince-philip-fast-facts%2Findex.html&docid=HwEjRyzIEcoARM&tbnid=efs433Wzd1ZCwM%3A&vet=10ahUKEwjtjcbc5N7bAhUMKHwKHVAdBeIQMwiHAigBMAE..i&w=780&h=438&client=ubuntu&bih=411&biw=1024&q=prince%20philip&ved=0ahUKEwjtjcbc5N7bAhUMKHwKHVAdBeIQMwiHAigBMAE&iact=mrc&uact=8',
		scores: [
			'2',
			'4',
			'1',
			'1',
			'1',
			'1',
			'1',
			'2',
			'1',
			'5'
		]
	},
	{
		name: 'Chloe',
		photo: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.vanitee.com%2Fbeauty-trends%2Fwp-content%2Fuploads%2F2017%2F08%2Fp256308-av-01-hero.jpg&imgrefurl=https%3A%2F%2Fwww.vanitee.com%2Fbeauty-trends%2Fproduct%2Fchloe-signature-eau-de-parfum%2F&docid=r90fj3N1ALHClM&tbnid=PgIpimNL-BaN1M%3A&vet=10ahUKEwjkuuv75d7bAhWow1QKHSYED4MQMwiWASgCMAI..i&w=250&h=250&client=ubuntu&bih=411&biw=1024&q=chloe&ved=0ahUKEwjkuuv75d7bAhWow1QKHSYED4MQMwiWASgCMAI&iact=mrc&uact=8',
		scores: [
			'4',
			'3',
			'5',
			'1',
			'1',
			'5',
			'5',
			'1',
			'1',
			'1'
		]
	},
	{
		name: 'Stephanie',
		photo: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.thefamouspeople.com%2Fprofiles%2Fimages%2Fstephanie-mcmahon-1.jpg&imgrefurl=https%3A%2F%2Fwww.thefamouspeople.com%2Fprofiles%2Fstephanie-mcmahon-9862.php&docid=1zzjRdH_V9-zWM&tbnid=VA4qOL6L6w8qsM%3A&vet=10ahUKEwj1rvqL5t7bAhWMK3wKHXQgBaoQMwjBASgCMAI..i&w=900&h=750&client=ubuntu&bih=411&biw=1024&q=stephanie&ved=0ahUKEwj1rvqL5t7bAhWMK3wKHXQgBaoQMwjBASgCMAI&iact=mrc&uact=8',
		scores: [
			'5',
			'1',
			'2',
			'1',
			'3',
			'4',
			'1',
			'3',
			'3',
			'4'
		]
	},
	{
		name: 'Ralph',
		photo: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fcoachgoins.podbean.com%2Fmf%2Fweb%2Fcxhvnr%2Fmain_1-Ralph-Sampson-Signed-Rockets-8x10-Photo-TriStar-PristineAuction_com.jpg&imgrefurl=https%3A%2F%2Fcoachgoins.podbean.com%2Fe%2Fralph-sampson-hall-of-famer%2F&docid=ASM3pfj3eAO3cM&tbnid=Yj7fKANhLcCStM%3A&vet=10ahUKEwi0q8G65N7bAhXKwVQKHZJBBHoQMwi3ASgIMAg..i&w=790&h=1000&client=ubuntu&bih=411&biw=1024&q=ralpher%20sampson&ved=0ahUKEwi0q8G65N7bAhXKwVQKHZJBBHoQMwi3ASgIMAg&iact=mrc&uact=8',
		scores: [
			'1',
			'1',
			'5',
			'5',
			'5',
			'5',
			'5',
			'5',
			'5',
			'1'
		]
	},
	{
		name: 'Bugsey',
		photo: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fthemobmuseum.org%2Fwp-content%2Fuploads%2F2015%2F04%2FTMM15005-533x400_WebAssets_Siegel.jpg&imgrefurl=https%3A%2F%2Fthemobmuseum.org%2Fnotable_names%2Fbenjamin-bugsy-siegel%2F&docid=_oHyLxaeswCoMM&tbnid=ghlur2tB8iF01M%3A&vet=10ahUKEwjb07Dt497bAhXorlQKHV6LAYcQMwjlASgCMAI..i&w=533&h=400&client=ubuntu&bih=411&biw=1024&q=bugsy%20siegel&ved=0ahUKEwjb07Dt497bAhXorlQKHV6LAYcQMwjlASgCMAI&iact=mrc&uact=8',
		scores: [
			'1',
			'1',
			'5',
			'1',
			'3',
			'2',
			'5',
			'1',
			'1',
			'5'
		]
	},
	{
		name: 'Jimmy',
		photo: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fuproxx.files.wordpress.com%2F2018%2F04%2Fmaynard-grid-uproxx.jpg%3Fquality%3D95%26w%3D650&imgrefurl=https%3A%2F%2Fuproxx.com%2Fmusic%2Fmaynard-james-keenan-interview-a-perfect-circle%2F&docid=IMTvKaiVb7YJzM&tbnid=nn_61WAOEs8XaM%3A&vet=10ahUKEwjo-oLN497bAhXKsFQKHSBIBkMQMwiGAigAMAA..i&w=650&h=360&client=ubuntu&bih=411&biw=1024&q=maynard%20james%20keenan&ved=0ahUKEwjo-oLN497bAhXKsFQKHSBIBkMQMwiGAigAMAA&iact=mrc&uact=8',
		scores: [
			'5',
			'4',
			'4',
			'2',
			'4',
			'4',
			'3',
			'2',
			'3',
			'3'
		]
	},
	{
		name: 'Mr. T',
		photo: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.thewrap.com%2Fwp-content%2Fuploads%2F2017%2F08%2Feazy-e.jpg&imgrefurl=https%3A%2F%2Fwww.thewrap.com%2Feazy-es-widow-sues-his-son-over-ruthless-records-n-w-a-use%2F&docid=NkFoZFoB7KzpiM&tbnid=2ODfHg_AkNuZ5M%3A&vet=10ahUKEwja3Pr-3d7bAhUfHDQIHa_-D04QMwiCAigJMAk..i&w=618&h=412&client=ubuntu&bih=582&biw=1366&q=eazy%20e&ved=0ahUKEwja3Pr-3d7bAhUfHDQIHa_-D04QMwiCAigJMAk&iact=mrc&uact=8',
		scores: [
			'5',
			'2',
			'3',
			'1',
			'5',
			'1',
			'3',
			'1',
			'1',
			'5'
		]
	},
	{
		name: 'Eazy-E',
		photo: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.thewrap.com%2Fwp-content%2Fuploads%2F2017%2F08%2Feazy-e.jpg&imgrefurl=https%3A%2F%2Fwww.thewrap.com%2Feazy-es-widow-sues-his-son-over-ruthless-records-n-w-a-use%2F&docid=NkFoZFoB7KzpiM&tbnid=2ODfHg_AkNuZ5M%3A&vet=10ahUKEwja3Pr-3d7bAhUfHDQIHa_-D04QMwiCAigJMAk..i&w=618&h=412&client=ubuntu&bih=582&biw=1366&q=eazy%20e&ved=0ahUKEwja3Pr-3d7bAhUfHDQIHa_-D04QMwiCAigJMAk&iact=mrc&uact=8',
		scores: [
			'5',
			'5',
			'5',
			'5',
			'5',
			'5',
			'5',
			'5',
			'5',
			'5'
		]
	},
	{
		name: 'Lance Armstrong',
		photo: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fpbs.twimg.com%2Fprofile_images%2F749321742720512000%2F55qv6Pxr_400x400.jpg&imgrefurl=https%3A%2F%2Ftwitter.com%2Flancearmstrong&docid=RzlujeOWPV72fM&tbnid=6V0YpxdJ6p8NLM%3A&vet=10ahUKEwixjqvZ3d7bAhX2IjQIHfo8A0QQMwigAigOMA4..i&w=400&h=400&client=ubuntu&bih=582&biw=1366&q=lance%20armstrong&ved=0ahUKEwixjqvZ3d7bAhX2IjQIHfo8A0QQMwigAigOMA4&iact=mrc&uact=8',
		scores: [
			'1',
			'1',
			'1',
			'1',
			'1',
			'1',
			'1',
			'1',
			'1',
			'1'
		]
	}
];

module.exports = friendsArray;