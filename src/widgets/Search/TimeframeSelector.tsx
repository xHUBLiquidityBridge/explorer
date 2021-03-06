import React, { useContext } from 'react';
import { FormattedMessage } from 'react-intl';

import { QueryContext } from '../../app/context/QueryContext';
import Flex from '../../components/Flex';
import MediaQuery from '../../components/MediaQuery';
import { HorizontalSpacer } from '../../components/Spacer';
import { TimeframeOption } from './styles';

export default function TimeframeSelector() {
  const { timeframe, setTimeframe } = useContext(QueryContext);

  return (
    <Flex direction="row">
      <MediaQuery size="sm">
        <TimeframeOption selected={timeframe === 7} onClick={() => setTimeframe(7)}>
          <FormattedMessage defaultMessage="7d" />
        </TimeframeOption>
        <HorizontalSpacer units={2} />
        <TimeframeOption selected={timeframe === 14} onClick={() => setTimeframe(14)}>
          <FormattedMessage defaultMessage="2w" />
        </TimeframeOption>
        <HorizontalSpacer units={2} />
        <TimeframeOption selected={timeframe === 30} onClick={() => setTimeframe(30)}>
          <FormattedMessage defaultMessage="1m" />
        </TimeframeOption>
      </MediaQuery>
      <MediaQuery size="md-up">
        <TimeframeOption selected={timeframe === 7} onClick={() => setTimeframe(7)}>
          <FormattedMessage defaultMessage="7 Days" />
        </TimeframeOption>
        <HorizontalSpacer units={3} />
        <TimeframeOption selected={timeframe === 14} onClick={() => setTimeframe(14)}>
          <FormattedMessage defaultMessage="2 Weeks" />
        </TimeframeOption>
        <HorizontalSpacer units={3} />
        <TimeframeOption selected={timeframe === 30} onClick={() => setTimeframe(30)}>
          <FormattedMessage defaultMessage="1 Month" />
        </TimeframeOption>
      </MediaQuery>
    </Flex>
  );
}
