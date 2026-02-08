export default function InvitePage() {
  return (
    <div className="letter-backdrop">
      <div className="letter-paper">
        <div className="letter-body">
          <p>Agents,</p>

          <p>
            Your recent performance in Big Bear was...{" "}
            <span className="underline">noted</span>. The release of the
            anomaly was not ideal. That said, circumstances were sub-optimal on
            our end. Consider this a reset.
          </p>

          <p>
            Something in Glenridge has gotten on our radar. Small coastal town
            north of Malibu. Two homicides in the past ten days. Unusual
            similarities. We need to determine whether this is a garden-variety
            psychopath or something that warrants our attention.
          </p>

          <p>
            <span className="emphasis">Cover:</span> FBI Violent Crimes Unit.
            Credentials and documentation will be provided. Some of you have
            worn the badge before. Others haven&apos;t. I trust the latter group
            will prepare accordingly.
          </p>

          {/* <p>
            <span className="emphasis">Rally point:</span>{" "}
            <span className="redacted">LOCATION TBD</span>. Saturday, 0900.
          </p> */}

          <p>Don&apos;t make me regret this.</p>
        </div>

        <div className="letter-signature">&mdash;Adam</div>

        <div className="letter-ps">
          <span className="ps-label">P.S.</span> Local media hasn&apos;t
          connected the dots yet. We&apos;d like to keep it that way. Move
          quickly.
        </div>

        {/* Delta Green triangle */}
        <div className="dg-triangle">
          <svg viewBox="0 0 100 87" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M50 0L100 87H0L50 0Z" fill="#2d5a27" />
          </svg>
        </div>
      </div>
    </div>
  );
}
