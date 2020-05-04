import React from 'react';
import Section from 'components/Section';
import Stack from 'components/Stack';
import styles from './styles.module.css';
import BackButton from 'components/BackButton';
import Title from 'components/Title';

export default function Shortcuts() {
  return (
    <>
      <BackButton />
      <Stack.Column gap="m">
        <Title emoji="⌨️" title="Shortcuts" />
        <Section emoji="🌎" title="Global">
          <ShortcutsTable>
            <Shortcut description="Open Focused Task (global)">
              <Cmd /> + <Key>'</Key>
            </Shortcut>
            <Shortcut description="New task">
              <Cmd /> + <Key>t</Key>
            </Shortcut>
            <Shortcut description="New bookmark">
              <Cmd /> + <Key>b</Key>
            </Shortcut>
            <Shortcut description="Focus on note">
              <Cmd /> + <Key>n</Key>
            </Shortcut>
            <Shortcut description="Open last bookmark">
              <Cmd /> + <Key>0</Key>
            </Shortcut>
            <Shortcut description="Open [1st-9th] bookmark">
              <Cmd /> + <Key>[1-9]</Key>
            </Shortcut>
          </ShortcutsTable>
        </Section>
        <Section emoji="🔜" title="Todos">
          <ShortcutsTable>
            <Shortcut description="New todo">
              <Key>Enter</Key>
            </Shortcut>
            <Shortcut description="Remove empty todo">
              <Key>Backspace</Key>
            </Shortcut>
            <Shortcut description="Blur current todo">
              <Key>Esc</Key>
            </Shortcut>
            <Shortcut description="Focus previous todo">
              <Key>↑</Key>
            </Shortcut>
            <Shortcut description="Focus next todo">
              <Key>↓</Key>
            </Shortcut>
            <Shortcut description="Move todo up">
              <Cmd /> + <Key>↑</Key>
            </Shortcut>
            <Shortcut description="Move todo down">
              <Cmd /> + <Key>↓</Key>
            </Shortcut>
            <Shortcut description="Decrease todo indentation">
              <Cmd /> + <Key>[</Key>
            </Shortcut>
            <Shortcut description="Increase todo indentation">
              <Cmd /> + <Key>]</Key>
            </Shortcut>
            <Shortcut description="Toggle completion of todo">
              <Cmd /> + <Key>Shift</Key> + <Key>c</Key>
            </Shortcut>
          </ShortcutsTable>
        </Section>
        <Section emoji="📌" title="Bookmarks">
          <ShortcutsTable>
            <Shortcut description="New bookmark">
              <Key>⏎ Enter</Key>
            </Shortcut>
            <Shortcut description="Remove empty bookmark">
              <Key>Backspace</Key>
            </Shortcut>
            <Shortcut description="Blur current bookmark">
              <Key>Esc</Key>
            </Shortcut>
            <Shortcut description="Focus previous bookmark">
              <Key>↑</Key>
            </Shortcut>
            <Shortcut description="Focus next bookmark">
              <Key>↓</Key>
            </Shortcut>
            <Shortcut description="Move bookmark up">
              <Cmd /> + <Key>↑</Key>
            </Shortcut>
            <Shortcut description="Move bookmark down">
              <Cmd /> + <Key>↓</Key>
            </Shortcut>
            <Shortcut description="Open bookmark">
              <Cmd /> + <Key>click</Key>
            </Shortcut>
          </ShortcutsTable>
        </Section>
      </Stack.Column>
    </>
  );
}

function ShortcutsTable({ children }: { children: React.ReactNode }) {
  return (
    <table className={styles.table}>
      <tbody>{children}</tbody>
    </table>
  );
}

function Shortcut({
  description,
  children,
}: {
  description: string;
  children: React.ReactNode;
}) {
  return (
    <tr>
      <td className={styles.keys} align="right">
        {children}
      </td>
      <td>{description}</td>
    </tr>
  );
}

function Cmd() {
  return <Key>⌘ Cmd</Key>;
}

function Key({ children }: { children: React.ReactNode }) {
  return <span className={styles.key}>{children}</span>;
}