import { IconBriefcase,  IconMapPin } from "@tabler/icons-react";

const fields=[
    {label:"Job Title",placeholder:"Enter Job Title", options:['Designer', 'Developer', 'Product Manager', 'Marketing Specialist', 'Data Analyst', 'Sales Executive', 'Content Writer', 'Customer Support'], leftSection:IconBriefcase},
    {label:"Company",placeholder:"Enter Company Name", options:['Google', 'Microsoft', 'Meta', 'Netflix', 'Adobe', 'Facebook', 'Amazon', 'Apple', 'Spotify'], leftSection:IconBriefcase},
    {label:"Location",placeholder:"Enter Job Location", options:['Lisboa', 'Porto', 'Coimbra', 'Braga', 'Faro', 'Aveiro', 'Évora', 'Setúbal'], leftSection:IconMapPin}
]
export default fields;