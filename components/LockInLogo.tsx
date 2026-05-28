type Props = {
  size?: number
}

/**
 * In-app header mark that mirrors the installed app icon: a gold bolt on a dark
 * rounded tile with a soft halo. The bolt fill is the same shimmering gold
 * gradient used by the add-task (+) button.
 */
export default function LockInLogo({ size = 30 }: Props) {
  return (
    <span
      aria-hidden
      className="lock-in-logo relative inline-block shrink-0"
      style={{ width: size, height: size }}
    >
      <span className="lock-in-logo-bolt" />
    </span>
  )
}
