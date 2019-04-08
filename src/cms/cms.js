import CMS from 'netlify-cms';

import InfoPagePreview from './preview-templates/InfoPagePreview';
import BlogPostPreview from './preview-templates/BlogPostPreview';
import IndexPagePreview from './preview-templates/IndexPagePreview';

CMS.registerPreviewTemplate('index', IndexPagePreview);
CMS.registerPreviewTemplate('about', InfoPagePreview);
CMS.registerPreviewTemplate('blog', BlogPostPreview);
