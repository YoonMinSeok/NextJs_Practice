import MeetupDetail from "../../components/meetups/MeetupDetail";

function MeetupDetails() {
  return (
    <MeetupDetail
      image="https://commons.wikimedia.org/wiki/File:Another_picture_of_band_members.jpg#/media/File:Another_picture_of_band_members.jpg"
      title="A First Meetup"
      address="Some Street 5, Some City"
      description="The meetup description"
    />
  );
}

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: "m1",
        },
      },
      {
        params: {
          meetupId: "m2",
        },
      },
    ],
  };
}

export async function getStaticProps(context) {
  const meetupIds = context.params.meetupId;

  console.log(meetupIds);
  return {
    props: {
      image:
        "https://commons.wikimedia.org/wiki/File:Another_picture_of_band_members.jpg#/media/File:Another_picture_of_band_members.jpg",
      id: meetupIds,
      title: "A First Meetup",
      address: "Some Street 5, Some City",
      description: "The meetup description",
    },
  };
}

export default MeetupDetails;
