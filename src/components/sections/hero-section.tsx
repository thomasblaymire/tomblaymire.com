import { Logo } from '@/components/logo';
import { Col, Grid, Row } from '@/styles/grid';

export type HeroSectionProps = {
  title: string | React.ReactNode;
  description?: string | React.ReactNode;
  socials: boolean;
  logo?: boolean;
};

function HeroSection({ title, description, socials, logo }: HeroSectionProps) {
  return (
    <section className="mt-24 pl-0 pb-24 border-b border-[rgba(63,63,70,0.4)] tablet:mt-32 tablet:border-none tablet:pb-0">
      <div className="max-w-280">
        <Grid>
          <Row>
            <Col size={1}>{logo ? <Logo /> : null}</Col>
          </Row>
          <Row>
            <Col size={1}>
              <h1 className="text-[rgb(39,39,42)] dark:text-[rgb(244,244,245)] mt-9">
                {title}
              </h1>
            </Col>
          </Row>
        </Grid>
        <p className="mt-7 text-[rgb(82,82,91)] dark:text-[rgb(161,161,170)]">
          {description}
        </p>
        {socials ? <h1>{socials}</h1> : null}
      </div>
    </section>
  );
}

export { HeroSection };
