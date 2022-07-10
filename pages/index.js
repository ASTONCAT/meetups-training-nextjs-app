import MeetupList from '../components/meetups/MeetupList'

const DUMMY_MEETUPS = [
	{
		id: 'm1',
		title: 'A First Meetup',
		image:
			'https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg',
		address: 'Marienplatz 1, 80331 Munich, Germany',
		description: 'This is a first meetup!'
	},
	{
		id: 'm2',
		title: 'A Second Meetup',
		image:
			'https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg',
		address: 'Marienplatz 4, 80331 Munich, Germany',
		description: 'This is a first meetup!'
	},
	{
		id: 'm3',
		title: 'A Third Meetup',
		image:
			'https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg',
		address: 'Marienplatz 8, 80331 Munich, Germany',
		description: 'This is a first meetup!'
	}
]

function HomePage() {
	return <MeetupList meetups={DUMMY_MEETUPS} />
}

export default HomePage
