
export interface HomeAboutUsIN {
  "0": HomeSingleDetail,
  items: { data: HomeSingleDetail[] }
}

export interface HomeFrontResponse {
  status: boolean;
  message: string;
  data: {
    about_us: HomeAboutUsIN
    ai: HomeSingleDetailsSection
    blocks: HomeSingleDetailsSection
    category: HomeCategory
    educational: HomeSingleDetailsSection
    faqs: {
      data: HomeFAQ[];
    };
    latest_blogs: {
      data: HomeBlog[];
    };
    latest_testimonials: {
      data: HomeTestimonial[];
    };
    partners: {
      data: HomePartner[];
    };
    readers: HomeSingleDetailsSection
    sliders: HomeSingleDetail[];
  };
}


export interface ApiReaderResponse {
  status: boolean;
  message: string;
  data: HomeSingleDetailsSection | null;
}

export interface ApiEducationResponse {
  status: boolean;
  message: string;
  data: HomeEducationSection | null;
}


export interface HomeBlog {
  id: number;
  image: string;
  blog_date: string;
  title: string;
  details: string;
  title_en: string;
  title_ar: string;
  detail_en: string;
  detail_ar: string;
  created_at: string;
}

export interface HomeTestimonial {
  id: number;
  name: string;
  title: string;
  opinion: string;
  name_en: string;
  name_ar: string;
  title_en: string;
  title_ar: string;
  opinion_en: string;
  opinion_ar: string;
  image: string;
  created_at: string;
}

export interface HomePartner {
  id: number;
  image: string;
  title: string;
  created_at: string;
}

export interface HomeFAQ {
  id: number;
  question: string;
  question_en: string;
  question_ar: string;
  answer: string;
  answer_en: string;
  answer_ar: string;
  created_at: string;
}

export interface HomeCategory {
  bg_color?: string;
  children: {
    bg_color: string;
    created_at: string;
    created_by: number;
    deleted_at: string | null;
    id: number;
    image: string;
    name: string;
    parent_id: number;
    translations: {
      category_id: number;
      created_at: string;
      id: number;
      locale: string;
      name: string;
      updated_at: string;
    }[];
    updated_at: string;
  }[];
  created_at: string;
  id: number;
  image: string;
  name?: string;
  name_ar?: string;
  name_en?: string;
  parent_id: number;
}


export interface HomeSingleDetail {
  created_at: string;
  detail_ar?: string;
  detail_en?: string;
  details?: string;
  id: number;
  image?: string;
  title?: string;
  title_ar?: string;
  title_en?: string;
}

export interface UniversityDetail {
  created_at: string;
  university_link?: string;
  id: number;
  image?: string;
  name?: string;
  name_ar?: string;
  name_en?: string;
}

export interface HomeSingleDetailsSection {
  items: {
    data: HomeSingleDetail[]
  }
  main_section: HomeSingleDetail
}




export interface HomeEducationSection {
  items: {
    data: HomeSingleDetail[]
  }
  main_section: HomeSingleDetail
  second_section: HomeSingleDetail
  university: {
    data: UniversityDetail[]
  }
}

export interface FrontSettings {
  id: number;
  phone: number;
  image: string;
  email: string;
  facebook: string;
  youtube: string;
  instagram: string;
  snapchat: string;
  twitter: string;
  location: string;
  address: string;
  details: string;
  app_name: string;
  meta_title?: string;
  meta_description?: string;
  detail_en: string;
  detail_ar: string;
  address_en: string;
  address_ar: string;
  app_name_en: string;
  app_name_ar: string;
  meta_title_en?: string;
  meta_title_ar?: string;
  meta_description_en?: string;
  meta_description_ar?: string;
}

export interface FrontSettingsRes {
  status: boolean;
  message: string;
  data: FrontSettings
}