jQuery(document).ready(function() {
    var originalLink = jQuery('.btn-nosetup');
    
    // btn-nosetup가 존재하고 btn-group이 없을 때만 스크립트 실행
    //if (originalLink.length > 0 && originalLink.parent('.btn-group').length === 0) {
	if (originalLink.length > 0) {
        var href = originalLink.attr('href');
        originalLink.replaceWith(`
            <div class="btn-group mb-2">
                <a class="btn btn-danger btn-nosetup" href="${href}">길호넷에서 다운로드 받기</a>
                <button class="btn btn-danger dropdown-toggle" data-bs-toggle="dropdown"></button>
                <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#" data-href="${href}">설치버전</a></li>
                    <li><a class="dropdown-item" href="#" data-href="${href}?nosetup">무설치버전</a></li>
                </ul>
            </div>
        `);
        
        jQuery('.dropdown-item').click(function(e) {
            e.preventDefault();
            var newHref = jQuery(this).data('href');
            jQuery('.btn-nosetup').attr('href', newHref).text(
                newHref.includes('nosetup') ? '길호넷에서 다운로드(무설치버전) 받기' : '길호넷에서 다운로드 받기'
            );
        });
    }

	// 쿠키를 통해 댓글 처리
	/*
	var	displayName = getCookie('wordpress_display_name');

	if(displayName)
	{
		displayName = decodeURIComponent(displayName);
		jQuery('.comment-notes').html(displayName+'(으)로 로그인 됨. (* 질문, 건의사항 등은 "질문게시판"을 이용해주세요)');
		jQuery('.comment-form-author').text(displayName);
		jQuery('.comment-form-author, .comment-form-email, .comment-form-url').hide();
	}
	*/
});
