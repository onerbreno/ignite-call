import { Box, Text, styled } from '@ignite-ui/react'

export const Container = styled(Box, {
  margin: '$6 auto 0',
  padding: 0,
  display: 'grid',
  maxWidth: '100%',
  position: 'relative',

  variants: {
    isTimePickerOpen: {
      true: {
        gridTemplateColumns: '1fr 280px',

        '@media(max-width: 900px)': {
          gridTemplateColumns: '1fr',
        },
      },
      false: {
        width: 540,
        gridTemplateColumns: '1fr',
      },
    },
  },
})

export const TimePicker = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  padding: '$6 $6 0',

  borderLeft: '1px solid $gray600',
  overflowY: 'scroll',

  position: 'absolute',
  top: 0,
  bottom: 0,
  right: 0,

  width: 280,
})

export const TimePickerHeader = styled(Text, {
  fontWeight: '$medium',

  span: {
    color: '$gray200',
  },
})

export const TimePickerList = styled('div', {
  display: 'grid',
  gridTemplateColumns: '1fr',
  marginTop: '$3',
  gap: '$2',
})

export const TimePickerItem = styled('button', {
  border: 0,
  borderRadius: '0.375rem',
  padding: '$2 0',
  cursor: 'pointer',
  lineHeight: 'base',

  background: '$gray600',
  color: '$gray100',

  fontFamily: '$default',
  textAlign: 'center',

  '&:last-child': {
    marginBottom: '$6',
  },

  '&:disabled': {
    background: 'none',
    cursor: 'default',
    opacity: 0.4,
  },

  '&:focus': {
    boxShadow: '0 0 2px $colors$gray100',
  },

  '&:not(:disabled):hover': {
    background: '$gray500',
  },
})
