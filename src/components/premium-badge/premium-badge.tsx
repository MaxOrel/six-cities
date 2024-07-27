type TPremiumBadgeProps = {
  isPremium: boolean;
  extraClassName: string;
};

function PremiumBadge({ isPremium, extraClassName }: TPremiumBadgeProps) {
  return (
    isPremium && (
      <div className={extraClassName}>
        <span>Premium</span>
      </div>
    )
  );
}

export default PremiumBadge;
