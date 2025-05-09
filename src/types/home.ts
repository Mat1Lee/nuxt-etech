interface homeBanner{
    title:string;
    description:string;
    heading:string;
    background_desktop:{
        url:string;
        alt:string;
        size:any;
    };
    background_mobile:{
        url:string;
        alt:string;
        size:any;
    };
    button:{
        title:string;
        url:string;
        target:string;
    }

}
interface homeResearch{
    research_title:string;
    research_description:string;
    research_link:{
        title:string;
        url:string;
        target:string;
    }
}
interface homeTabItem{
    title:string;

link:string;}

type ImageSizes = {
    thumbnail: string;
    "thumbnail-width": number;
    "thumbnail-height": number;
    medium: string;
    "medium-width": number;
    "medium-height": number;
  };
  
  type EventItem = {
    title: string;
    excerpt: string;
    url: string;
    id: number;
    image_url: string;
    image_alt: string;
    image_sizes: ImageSizes;
    read_more_link: string;
  };
  
  type LinkInfo = {
    title: string;
    url: string;
    target: string;
  };
  
  type HomeOurWorks = {
    our_works_title: string;
    our_works_link: LinkInfo;
    our_works_list: EventItem[]; 
    events_title: string;
    events_link: LinkInfo;
    events_list: EventItem[];
  };
  
  type HomeEvents = {
    events_title: string;
    events_link: LinkInfo;
    events_list: EventItem[];
  };
  
  type HomeData = {
    home_our_works: HomeOurWorks;
    home_events: HomeEvents;
  };
  export interface HomePageData {
    home_banner: homeBanner;    
    home_research: homeResearch;
    home_tab: homeTabItem[];
    home_data: HomeData;
    home_our_works: HomeOurWorks;
    home_events: HomeEvents;
  }