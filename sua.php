<?php

// Check rows existexists.
if( have_rows('template_QA') ):

    // Loop through rows.
    while( have_rows('template_QA') ) : the_row();

        // Load sub field value.
        $sub_value_title = get_sub_field('general_questions_title');
        $sub_value_answer = get_sub_field('general_questions_answer');
        echo $sub_value_title;
        echo $sub_value_answer;
        // Do something...

    // End loop.
    endwhile;

// No value.
else :
    // Do something...
endif;
?>
<script type="application/ld+json">
{
  "@context": "https://schema.org/",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "MISA AMIS có khả năng phân quyền cho người dùng trên ứng dụng không?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Trên hệ thống MISA AMIS, mỗi doanh nghiệp khách hàng sẽ được cung cấp một môi trường làm việc hoàn toàn riêng biệt và khả năng tùy chỉnh riêng. Tại đây, quản trị viên hệ thống có thể thiết lập cho mỗi tài khoản người dùng các quyền để truy cập và thao tác trên hệ thống, theo vị trí công việc thực tế yêu cầu"
      }
    },
  ]
}
</script> 