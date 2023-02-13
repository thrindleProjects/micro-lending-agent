import Button from '@/components/buttons/Button';
import { MemberProps } from '@/components/lib/member/Member.props';

const Member: React.FC<MemberProps> = ({ name, status, onClick }) => {
  return (
    <tr>
      <td>{name}</td>
      <td>{status}</td>
      <td>
        <Button
          onClick={() => onClick('check-bvn')}
          variant='primary'
          size='base'
          className='ml-auto block'
        >
          Apply for loan
        </Button>
      </td>
    </tr>
  );
};

export default Member;
