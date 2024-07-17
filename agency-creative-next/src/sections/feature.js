/** @jsx jsx */
import { jsx } from "theme-ui";
import { Container, Grid } from "theme-ui";
import SectionHeader from "components/section-header";
import FeatureCard from "components/feature-card.js";
import Marketplace from "assets/feature/marketplace.svg";
import Gift from "assets/feature/gift.svg";
import Award from "assets/feature/award.svg";

const data = [
  {
    id: 1,
    imgSrc: Marketplace,
    altText: "Qui nisi voluptas",
    title: "Qui nisi voluptas",
    text: "Lorem ipsum dolor sit amet. Qui dolor obcaecati et nesciunt molestiae eos iure velit ut impedit accusamus ut dolor sint et reiciendis rerum eos molestias.",
  },
  {
    id: 2,
    imgSrc: Gift,
    altText: "Gift",
    title: "Qui nisi voluptas",
    text: "Lorem ipsum dolor sit amet. Qui dolor obcaecati et nesciunt molestiae eos iure velit ut impedit accusamus ut dolor sint et reiciendis rerum eos molestias.",
  },
  {
    id: 3,
    imgSrc: Award,
    altText: "Awards",
    title: "Qui nisi voluptas",
    text: "Lorem ipsum dolor sit amet. Qui dolor obcaecati et nesciunt molestiae eos iure velit ut impedit accusamus ut dolor sint et reiciendis rerum eos molestias.",
  },
];

export default function Feature() {
  return (
    <section sx={{ variant: "section.feature" }} id="feature">
      <Container>
        <SectionHeader
          title="Qui nisi voluptas sit cupiditate"
          description="Lorem ipsum dolor sit amet. Qui dolor obcaecati et nesciunt molestiae eos iure velit ut impedit accusamus ut dolor sint et reiciendis rerum eos molestias."
        />

        <Grid sx={styles.grid}>
          {data.map((item) => (
            <FeatureCard
              key={item.id}
              src={item.imgSrc}
              alt={item.title}
              title={item.title}
              text={item.text}
            />
          ))}
        </Grid>
      </Container>
    </section>
  );
}

const styles = {
  grid: {
    pt: [0, null, null, null, null, null, null, null, 4],
    pb: [0, null, null, null, null, null, null, null, 6],
    gridGap: [
      "40px",
      "45px",
      "45px 30px",
      null,
      "60px 30px",
      "50px 40px",
      null,
      "75px",
    ],
    gridTemplateColumns: [
      "repeat(1,1fr)",
      null,
      "repeat(2,1fr)",
      null,
      "repeat(3,1fr)",
    ],
  },
};
