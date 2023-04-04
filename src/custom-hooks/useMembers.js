import { useStaticQuery, graphql } from "gatsby";
export default function useMembers(memberTypes = []) {
  const membersData = useStaticQuery(graphql`
    query {
      allStrapiMembers {
        nodes {
          id
          name
          memberType
          title
          location
          linkedinURL
          twitterURL
          githubURL
          profileImage {
            childImageSharp {
              fluid(maxWidth: 294, quality: 100) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  `);

  const allMembers = membersData.allStrapiMembers.nodes;
  const membersOfMembersType = allMembers.filter(member =>
    memberTypes.length ? memberTypes.includes(member.memberType) : true
  );
  const membersSortedByName = membersOfMembersType.sort((a, b) =>
    a.name.localeCompare(b.name)
  );
  return membersSortedByName;
}
