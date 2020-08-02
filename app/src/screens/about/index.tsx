import React from 'react';
import Stack from 'components/Stack';
import BackButton from 'components/BackButton';
import styles from './styles.module.css';
import ExternalLink from 'components/ExternalLink';
import logo from 'icons/logo.png';
import { appVersion } from 'utils/electron';

export default function Shortcuts() {
  return (
    <>
      <BackButton />
      <Stack.Column
        align="center"
        justify="center"
        className={styles.about}
        gap="s">
        <img src={logo} alt="Logo" width={100} height={100} />
        <strong>Focused Task</strong>
        <span>Version {appVersion()}</span>
        <span>
          Copyright ©{' '}
          <ExternalLink href="https://rstankov.com">
            Radoslav Stankov
          </ExternalLink>
        </span>
        <ExternalLink href="http://github.com/rstankov/FocusedTask">
          Source Code
        </ExternalLink>
      </Stack.Column>
    </>
  );
}