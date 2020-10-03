import Reveal from 'reveal.js';
import Markdown from 'reveal.js/plugin/markdown/markdown.esm.js';
var SLConfig = {"current_user":{"id":1327705,"username":"nicolechoman","name":"Nicole Choman","description":null,"thumbnail_url":"https://lh6.googleusercontent.com/-y6ueBGa9VSg/AAAAAAAAAAI/AAAAAAAAAAA/AMZuucnfLi03L7rNwFY88unBAzzvErmtDw/photo.jpg","account_type":"default","team_id":null,"settings":{"id":5385890,"present_controls":true,"present_upsizing":true,"present_pointer":false,"present_notes":true,"default_deck_tag_id":null,"editor_grid":true,"editor_grid_on_top":false,"editor_snap":true,"editor_fixed_notes":false,"developer_mode":false,"speaker_layout":null,"speaker_theme":null,"phone_number":null,"phone_country_code":null,"media_sources":null,"export_controls":null,"export_slide_number":null,"export_slide_notes":null,"export_separate_fragments":null,"auto_animate_tutorial_completed":null},"email":"n@oakwave.com","notify_on_receipt":true,"billing_address":null,"billing_vat_id":null,"editor_tutorial_completed":true,"manually_upgraded":false,"deck_user_editor_limit":null,"storage_used":661600,"storage_limit":262144000,"image_upload_limit":10485760,"video_upload_limit":104857600},"deck":{"id":1937388,"slug":"deck-d99d32","title":"deck","description":"","width":1024,"height":576,"margin":0.0,"visibility":"all","published_at":"2020-10-01T13:37:43.255Z","sanitize_messages":null,"thumbnail_url":"https://s3.amazonaws.com/media-p.slid.es/thumbnails/19346a47013f631e29aca3d9cde07ee4/thumb.jpg?1601559880","view_count":0,"user":{"id":1327705,"username":"nicolechoman","name":"Nicole Choman","description":null,"thumbnail_url":"https://lh6.googleusercontent.com/-y6ueBGa9VSg/AAAAAAAAAAI/AAAAAAAAAAA/AMZuucnfLi03L7rNwFY88unBAzzvErmtDw/photo.jpg","account_type":"default","team_id":null,"settings":{"id":5385890,"present_controls":true,"present_upsizing":true,"present_pointer":false,"present_notes":true,"default_deck_tag_id":null}},"background_transition":"slide","transition":"concave","theme_id":null,"theme_font":"montserrat","theme_color":"white-blue","auto_slide_interval":8000,"comments_enabled":false,"forking_enabled":true,"rolling_links":false,"center":false,"shuffle":false,"should_loop":true,"share_notes":false,"slide_number":false,"slide_count":6,"rtl":false,"version":2,"collaborative":null,"deck_user_editor_limit":null,"data_updated_at":1601559880159,"font_typekit":null,"font_google":null,"time_limit":null,"navigation_mode":"default","upsizing_enabled":true,"notes":{}},"user":{"id":1327705,"username":"nicolechoman","name":"Nicole Choman","description":null,"thumbnail_url":"https://lh6.googleusercontent.com/-y6ueBGa9VSg/AAAAAAAAAAI/AAAAAAAAAAA/AMZuucnfLi03L7rNwFY88unBAzzvErmtDw/photo.jpg","account_type":"default","team_id":null,"settings":{"id":5385890,"present_controls":true,"present_upsizing":true,"present_pointer":false,"present_notes":true,"default_deck_tag_id":null}}};
Reveal.initialize({
    width: SLConfig.deck.width,
    height: SLConfig.deck.height,
    margin: 0.05,
    

    hash: true,
    controls: true,
    progress: true,
    mouseWheel: false,
    showNotes: SLConfig.deck.share_notes ? 'separate-page' : false,
    slideNumber: SLConfig.deck.slide_number,
    fragmentInURL: true,

    autoSlide: SLConfig.deck.auto_slide_interval || 0,
    autoSlideStoppable: true,

    autoAnimateMatcher: SL.deck.AutoAnimate.matcher,

    rollingLinks: false,
    center: SLConfig.deck.center || false,
    shuffle: SLConfig.deck.shuffle || false,
    loop: SLConfig.deck.should_loop || false,
    rtl: SLConfig.deck.rtl || false,
    navigationMode: SLConfig.deck.navigation_mode,

    transition: SLConfig.deck.transition,
    backgroundTransition: SLConfig.deck.background_transition,

    pdfMaxPagesPerSlide: 1,

    highlight: {
        escapeHTML: false
    },

    plugins: [ RevealHighlight ]
});