import css from './VoteStats.module.css';
import type { Votes } from '../../types/votes.ts';

interface Props {
  votes: Votes;
  totalVotes: number;
  positiveRate: number;
}

 function VoteStats({ votes, totalVotes, positiveRate }: Props) {
  return (
    <div className={css.container}>
      {Object.entries(votes).map(([key, value]) => (
        <p key={key} className={css.stat}>
          {key[0].toUpperCase() + key.slice(1)}: <strong>{value}</strong>
        </p>
      ))}
      <p className={css.stat}>Total: <strong>{totalVotes}</strong></p>
      <p className={css.stat}>Positive: <strong>{positiveRate}%</strong></p>
    </div>
  );
}
export default VoteStats