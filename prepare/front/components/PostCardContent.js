import Link from 'next/link';
import PropTypes from 'prop-types';

const PostCardContent = ({ postData }) => ( //'첫번째 게시글 #해시태그 #하이하이'
    <div>
        {postData.split(/(#[^\s#]+)/g).map((v, i) => {
            if (v.match(/(#[^\s#]+)/)) {
                return <Link href={`/hashtag/${v.slice(1)}`} key={i}><a>{v}</a></Link>
            }
            return v;
        })} {/* / / 사이에 글자 넣으면 정규표현식 사용 가능. RegExr 유용함. 다양한 케이스 고려하는 것이 필수. */}
    </div>
);

PostCardContent.propTypes = {postData: PropTypes.string.isRequired};

export default PostCardContent;