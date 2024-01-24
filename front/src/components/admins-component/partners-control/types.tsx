type InfoPartnersItem = {
  id: string;
  src: string;
  name: string;
};

export interface InfoPartnersProps {
  baseHref: string;
  data: InfoPartnersItem[];
}
