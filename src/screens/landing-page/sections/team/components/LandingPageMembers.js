import LandingPageMemberCard from "./LandingPageMemberCard";

const quickCheckImage = `${process.env.PUBLIC_URL}/assets/images/quick-check-v2.jpg`;

export const MemberCardBenjamin = () => {
    return (
        <LandingPageMemberCard
            imageUrl={quickCheckImage}
            name={"Benjamin Degenhart"}
            position={"Knowledge Engineer"}
            email={"benjamin.degenhart@foerderfunke.org"}
            linkedin={"LinkedIn"}
        />
    );
}

export const MemberCardVanessa = () => {
    return (
        <LandingPageMemberCard
            imageUrl={quickCheckImage}
            name={"Vanessa Espinosa"}
            position={"UI/UX Designer"}
            email={"vanessa.espinosa@foerderfunke.org"}
            linkedin={"LinkedIn"}
        />
    );
}

export const MemberCardBen = () => {
    return (
        <LandingPageMemberCard
            imageUrl={quickCheckImage}
            name={"Ben Gläser"}
            position={"Software Engineer"}
            email={"ben.glaeser@foerderfunke.org"}
            linkedin={"LinkedIn"}
        />
    );
}
