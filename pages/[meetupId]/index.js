import MeetupDetail from '../../components/meetups/MeetupDetail'

function MeetupDetails() {
	return (
		<MeetupDetail
			img="https://www.klatovy.net/fotogalerie/albums/userpics2010/IMG_2547.jpg"
			title="Klatovy Folklore Festival"
			address="Náměstí Míru 1, Klatovy 33901"
			description="After the end of the traditional pilgrimage, the folklore festival begins in Klatovy. We will meet in the restaurant of the Družba cultural house."
		/>
	)
}

export async function getStaticProps(context) {
	// fetch data for a single meetup

	const meetupId = context.params.meetupId

	console.log(meetupId)

	return {
		props: {
			meetupData: {
				id: 'm1',
				image:
					'https://www.klatovy.net/fotogalerie/albums/userpics2010/IMG_2547.jpg',
				title: 'Klatovy Folklore Festival',
				address: 'Náměstí Míru 1, Klatovy 33901',
				description:
					'After the end of the traditional pilgrimage, the folklore festival begins in Klatovy. We will meet in the restaurant of the Družba cultural house.'
			}
		}
	}
}

export default MeetupDetails
