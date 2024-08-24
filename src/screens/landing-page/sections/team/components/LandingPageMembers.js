import LandingPageMemberCard from "./LandingPageMemberCard";


export const MemberCardBenjamin = () => {
    const portraitUrl = `${process.env.PUBLIC_URL}/assets/images/portraits/Portrait_Benjamin_Cropped.jpg`;

    return (
        <LandingPageMemberCard
            imageUrl={portraitUrl}
            name={"Benjamin Degenhart"}
            position={"Knowledge Engineer"}
            email={"benjamin.degenhart@foerderfunke.org"}
            linkedin={"https://www.linkedin.com/in/bdegenhart"}
        />
    );
}

export const MemberCardVanessa = () => {
    const portraitUrl = `${process.env.PUBLIC_URL}/assets/images/portraits/Portrait_Vanessa_Cropped.jpg`;

    return (
        <LandingPageMemberCard
            imageUrl={portraitUrl}
            name={"Vanessa Espinosa"}
            position={"UI/UX Designer"}
            email={"vanessa.espinosa@foerderfunke.org"}
            linkedin={"https://www.linkedin.com/in/espinosaureta"}
        />
    );
}

export const MemberCardBen = () => {
    const portraitUrl = `${process.env.PUBLIC_URL}/assets/images/portraits/Portrait_Ben_Cropped.jpg`;

    return (
        <LandingPageMemberCard
            imageUrl={portraitUrl}
            name={"Ben Gläser"}
            position={"Software Engineer"}
            email={"ben.glaeser@foerderfunke.org"}
            linkedin={"https://www.linkedin.com/in/ben-gl%C3%A4ser-42227b133/"}
        />
    );
}
