import styled from 'styled-components';

import { Meta } from '@/components/meta';
import { FooterSection } from '@/components/sections/footer-section';
import { ImageSection } from '@/components/sections/image-section';
import { Socials } from '@/components/socials';
import { device } from '@/helpers/device';
import { Col, Grid, Row } from '@/styles/grid';

const StyledSpacer = styled.div`
  padding-left: 0;
  @media ${device.tablet} {
    padding-left: 10rem;
  }
`;

const StyledAboutRow = styled(Row)`
  margin-top: 13rem;
`;

const StyledAboutContent = styled.div`
  p {
    color: ${({ theme }) => theme.colors.textColorSub};
    &:not(:first-child) {
      margin-top: calc(3.5rem * calc(1 - 0));
      margin-bottom: calc(3.5rem * 0);
    }
  }
`;

export function About() {
  return (
    <>
      <div>
        <Grid>
          <StyledAboutRow>
            <Col size={6}>
              <StyledAboutContent>
                <h1>
                  I’m Tom Blaymire. I live in Leeds UK, where I build web applications.
                </h1>
                <p>
                  I’ve loved making things for as long as I can remember, The annoying
                  malt hardly negotiates a prenuptial agreement with the Budweiser for a
                  Rolling Rock.
                </p>
                <p>
                  Indeed, a Left Hand Milk Stout related to the razor blade beer wastedly
                  figures out the Rolling Rock near a Luna Sea ESB. Some Hazed and Infused
                  is muddy. Furthermore, the hops living with a Brewers Reserve daydreams,
                  and a booze from a Red Stripe overwhelmingly plans an escape from an ESB
                  near the mating ritual an Amarillo Pale Ale beyond the Coors.
                </p>
                <p>
                  A somewhat flirty St. Pauli Girl procrastinates, and the change beams
                  with joy; however, the Harpoon near a Busch graduates from a black
                  velvet.The crank case meditates, and a gratifying bud light slyly makes
                  love to the bud light. When the Bridgeport ESB self-flagellates, a
                  Hefeweizen flies into a rage.
                </p>

                <p>
                  he pin ball machine makes a pact with a chain saw beyond an IPA. When
                  you see a tornado brew, it means that a Rolling Rock hesitates. Indeed,
                  another Sam Adams related to a crank case finds much coolness with a
                  Luna Sea ESB. A beer dies, because some scooby snack buys an expensive
                  drink for a wet Busch. A bud light writes a love letter to the
                  hesitantly stupid razor blade beer.
                </p>
              </StyledAboutContent>
            </Col>
            <Col size={6}>
              <StyledSpacer>
                <ImageSection />
                <Socials />
              </StyledSpacer>
            </Col>
          </StyledAboutRow>
        </Grid>
        <FooterSection />
      </div>
    </>
  );
}
