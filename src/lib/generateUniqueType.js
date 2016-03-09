var uniqueStringCounter_ = Math.random() * 0x80000000 | 0;

export default function(){
	return 'type' + uniqueStringCounter_++
}