import { IconBoltFilled } from '@tabler/icons-react'

type Props = {
  size?: number
}

export default function LockInLogo({ size = 36 }: Props) {
  return (
    <span aria-hidden className="lock-in-logo-bolt shrink-0" style={{ display: 'inline-flex' }}>
      <IconBoltFilled size={size} />
    </span>
  )
}
