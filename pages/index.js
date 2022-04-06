import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A First Meetup",
    image:
      "https://commons.wikimedia.org/wiki/File:Another_picture_of_band_members.jpg#/media/File:Another_picture_of_band_members.jpg",
    address: "Some address 5, 12345 Some City",
    description: "This is first meetup",
  },
  {
    id: "m2",
    title: "A Second Meetup",
    image:
      "https://commons.wikimedia.org/wiki/File:Another_picture_of_band_members.jpg#/media/File:Another_picture_of_band_members.jpg",
    address: "Some address 10, 12345 Some City",
    description: "This is second meetup",
  },
];

function HomePage(props) {
  return <MeetupList meetups={props.meetups} />;
}

export async function getServerSideProps(context) {
  const req = context.req;
  const res = context.res;
  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
  };
}

// export async function getStaticProps() {
//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     },
//   };
// }

export default HomePage;
