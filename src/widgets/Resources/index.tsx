import React from 'react';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';

import Carousel from '../../components/Carousel';
import Flex from '../../components/Flex';
import Link from '../../components/Link';
import { VerticalSpacer } from '../../components/Spacer';
import { H4, H7 } from '../../components/Typography';
import {
  AIRSWAP_DISCORD_URL,
  AIRSWAP_DOCS_URL,
  AIRSWAP_FAQ_URL,
  AIRSWAP_INSTANT_URL,
  AIRSWAP_TRADER_URL,
  AIRSWAP_TWITTER_URL,
} from '../../constants';
import WidgetCard from '../WidgetComponents/WidgetCard';

const LinkContainer = styled(Flex).attrs({ expand: true, direction: 'row' })`
  height: 100%;
`;

const LinkText = styled(H7)`
  color: rgba(255, 255, 255, 0.25);
`;

const ResourcesTitle = styled(H4)`
  color: white;
  position: absolute;
  top: 20px;
  left: ${({ theme }) => theme.spacing.widgetPadding};

  @media (max-width: ${({ theme }) => `${theme.breakpoints.sm[1]}px`}) {
    left: ${({ theme }) => theme.spacing.mobileWidgetPadding};
  }
`;

interface ResourceLinkProps {
  label: string;
  url: string;
}

function ResourceLink(props: ResourceLinkProps) {
  return (
    <Flex align="flex-start">
      <Link url={props.url}>
        <LinkText>{props.label}</LinkText>
      </Link>
    </Flex>
  );
}

export default function Resources() {
  const carouselSettings = {
    className: 'resource-carousel',
    dots: false,
    arrows: true,
    slidesToShow: 6,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 6,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 4,
        },
      },
    ],
  };

  return (
    <WidgetCard width="420px" height="110px">
      <ResourcesTitle>
        <FormattedMessage defaultMessage="Resources" />
      </ResourcesTitle>
      <VerticalSpacer units={3} />
      <LinkContainer>
        <Carousel settings={carouselSettings}>
          <ResourceLink label="Instant" url={AIRSWAP_INSTANT_URL} />
          <ResourceLink label="Trader" url={AIRSWAP_TRADER_URL} />
          <ResourceLink label="FAQ" url={AIRSWAP_FAQ_URL} />
          <ResourceLink label="Docs" url={AIRSWAP_DOCS_URL} />
          <ResourceLink label="Discord" url={AIRSWAP_DISCORD_URL} />
          <ResourceLink label="Twitter" url={AIRSWAP_TWITTER_URL} />
        </Carousel>
      </LinkContainer>
    </WidgetCard>
  );
}
