import CMS from 'netlify-cms';

import InfoPagePreview from './preview-templates/InfoPagePreview';
import VideoPagePreview from './preview-templates/VideoPagePreview';
import BlogPostPreview from './preview-templates/BlogPostPreview';
import IndexPagePreview from './preview-templates/IndexPagePreview';

CMS.registerPreviewTemplate('index', IndexPagePreview);
CMS.registerPreviewTemplate('about', InfoPagePreview);
CMS.registerPreviewTemplate('video', VideoPagePreview);
CMS.registerPreviewTemplate('blog', BlogPostPreview);
