
import { PageContent, Reference } from '../types';
import { HomeIcon, EconomyIcon, SocialIcon, DiversityIcon, HealthIcon, CrisisIcon, ResourcesIcon, ConclusionIcon } from '../components/icons';

export const introContent = {
    heroTitle: "Supporting Today's Children, Shaping Tomorrow's Future",
    heroSubtitle: "A resource hub for Australian early childhood educators to navigate the complex contexts of modern family and community life.",
    title: "Working with Children, Families, and Communities in Contemporary Society",
    subtitle: "A Professional Development and Reference Tool",
    introduction: [
        "The early childhood ages are a time in the development of the body, mind, emotional and social aspects that show rapid growth. What takes place at this stage determines lifelong learning, health, and well-being. The impact of the settings within which children develop, such as the family, community, and the larger socio-economic and cultural environments, is conclusively determinant of development outcomes (Bronfenbrenner, 1979; McLachlan et al., 2018).",
        "The families turning up in Australia are of various profiles in terms of background, available resources and difficulties. The multicultural character of the country, along with the diversity of the geographical location and current social movement, implies that early childhood professionals must face a broad variety of contexts in the process of assisting children and families. Such contexts are dynamic, and they change according to social policy shifts, the fixture of the economy, environmental changes and the way a community operates. These complexities are important to understand, so the educators can offer equitable, inclusive, and responsive services (Department of Education, 2023).",
        "This resource is created to be a professional development and reference tool to early childhood educators, leaders, policymakers and community workers. It seeks to deal with the variety, intricacy and struggle that children face in Australia within five interrelated contexts: Economic Conditions, Social Contexts, Contexts of Culture and Diversity, Contexts of Health and Wellbeing, and Crisis and Emergency Contexts."
    ],
    relevance: [
        "Early childhood education happens in a vacuum. Learning and development of children occur within the social systems, and how they turn out depends on interactions within their system (Bronfenbrenner, 1979). By making themselves aware of the impacts of socio-economic factors, cultural identity, health, and environmental soundness, educators can modify their pedagogical approaches to integrate the issues that better reflect the needs of the individuals, support resilience in children, and effect changes in the system regarding child well-being.",
        "As an example, a teacher dealing with a child with housing instability will need to have knowledge not only about the learning effects that recent living conditions are likely to have on them, including fatigue or impaired concentration, but also about available policy options, e.g. rental subsidies or homeless assistance (Phillips & Gray, 2022). On the same note, knowledge about cultural contexts enables teachers to integrate good practices that validate identity and belonging (DEEWR, 2009)."
    ],
    purpose: [
        { title: "Knowledge Development", description: "Creatively serving to offer in-depth, evidence-based information on the influence that different contexts on children and families have." },
        { title: "Professional Guidance", description: "In an attempt to provide practical measures that may be adopted in early childhood services." },
        { title: "Policy Awareness", description: "To make educators aware of applicable Australian policies and programs." },
        { title: "Resource Sharing", description: "To list suggested books, media, and professional organisations that assist in practice." },
        { title: "Partnership Building", description: "To show the potential to collaborate between the educators, families, and community organisations." }
    ],
    navigation: {
        intro: "The resource is divided into several main content pages:",
        pages: [
            { title: "Home / Introduction", description: "Overview and navigation guidance.", link: "/" },
            { title: "Economic Contexts", description: "Financial hardship and its effects on families.", link: "/economic" },
            { title: "Social Contexts", description: "Isolation, family separation, and child protection issues.", link: "/social" },
            { title: "Cultural and Diversity Contexts", description: "First Nations, immigrant, and refugee experiences.", link: "/cultural" },
            { title: "Health and Wellbeing Contexts", description: "Parental mental health, trauma, and abuse.", link: "/health" },
            { title: "Crisis and Emergency Contexts", description: "Disasters, violence, and displacement.", link: "/crisis" },
            { title: "Conclusion", description: "A summary of the key themes and takeaways from the resource.", link: "/conclusion" },
            { title: "References", description: "A complete list of sources cited in APA 7th style.", link: "/references" }
        ],
        structure: "Each context page is structured under the following headings: Understanding the Context, Impact on Children and Families, Social Policy and Australian Responses, Strategies for Practice, Community and Professional Partnerships, and Resources for Educators and Children."
    },
    framework: {
        intro: "This resource draws on several sociological and developmental theories:",
        theories: [
            { name: "The Ecological Systems Theory of Bronfenbrenner", description: "Outlines the mutually dependent strata of the environment of the child." },
            { name: "Maslow’s Hierarchy of Needs", description: "The focus was on achieving basic needs first to have higher-order learning." },
            { name: "The attachment theory (Bowlby, 1969)", description: "Emphasises the importance of secure relationships to healthy development." },
            { name: "Resilience Theory", description: "Emphasizes protective factors and strengths which promote recovery from felt adversity." },
            { name: "Social Learning Theory (Bandura, 1977)", description: "The theory demonstrates the process of children acquiring behaviours by learning what to observe and dealing with them." }
        ]
    }
};

const economicContexts: PageContent = {
    id: 'economic',
    title: 'Economic Contexts',
    icon: EconomyIcon,
    understanding: [
        "By economic contexts in early childhood, we mean financial situations and conditions of living that compose the everyday realities of children and their families. Some of the factors that affect the well-being and development of children so much are the level of income, stability of employment, housing affordability, and access to resources (AIHW, 2023). Financial hardship has been a hot topic in Australia, and about 13.4% of the Australian population is considered to live below the poverty line; one out of every six kids is included in the statistics (ACOSS, 2022).",
        "Economic disadvantage may be due to numerous factors, such as unemployment, inadequate employment, inadequate income levels, high costs of living, institutional injustices and the emergence of any event in life like sickness or failure of a relationship. Housing pressure where families are forced to pay over 30 per cent of their income in the accommodation sector is especially evident in big cities, such as Sydney and Melbourne, hence insecurity and excessive movement of homes (Anglicare Australia, 2023).",
        "In theory, Maslow’s Hierarchy of Needs implies a person with unmet physiological and safety needs, like having shelter, food and protection, etc., has a reduced chance of attaining self-esteem, belonging and self-actualisation demands (Maslow, 1943). In the same way, Ecological Systems Theory by Bronfenbrenner shows how macro-economic pressure is carried on family-level (microsystem) conditions that affect the development of children (Bronfenbrenner, 1979)."
    ],
    impact: {
        intro: "Financial distress has repercussions on all other aspects of child development:",
        points: [
            "Cognitive Development: The inaccessibility to high-quality early learning environments, books, and enriching experiences may also influence the acquisition of language, literacy, and problem-solving (Gorski, 2017).",
            "Physical Health: Due to financial pressure, there is limited access to healthy food, medical care, and hazard-free accommodation, which can put one at risk of becoming malnourished, falling sick or exposed to insecure environments (AIHW, 2023).",
            "Emotional and Social Wellbeing: Children will not be able to engage in extracurricular activities or will feel poorly dressed or resourced compared to their peers and therefore will develop stress and have anxiety issues or a sense of being an outcast (Treanor, 2020).",
            "Parental Wellbeing: Economic stress may strain parents and result in negative effects on parental wellbeing, including parenting and family ties. Stress can also decrease the level at which parents can be involved in the education of their children (Conger & Donnellan, 2007)."
        ]
    },
    policy: {
        intro: "There are several national and state policies related to economic disadvantage, and how it can affect children:",
        points: [
            "Family Tax Benefit Part A and Part B - This gives income support to families that are dependent on children.",
            "Child Care Subsidy (CCS) - it decreases the out-of-pocket expenses of early childhood education so more people can enter the workforce and receive high-quality care (Department of Social Services, 2023).",
            "The National Housing and Homelessness Agreement (NHHA) grants funding to housing assistance and homelessness services.",
            "State School Start Programs - Assist with school materials, uniforms, and non-school activities.",
            "The National Framework for Protecting Australia’s Children acknowledges the importance of economic security towards the protection of the well-being of children."
        ],
        conclusion: "Nonetheless, there are still gaps, especially about the increased cost of living, high numbers in the public housing waiting lists, and structural obstacles to vulnerable populations, including single parents and newly arrived migrant families. Policy evaluations state that even though income support measures do relieve an immediate situation, the only way to develop a long-term solution is to invest in affordable housing, access childcare, and create jobs (AIHW, 2023)."
    },
    strategies: [
        "Form Good Relationships: Learn to build relationships with the families, build trust, get to know their situations and find how to connect them with other support services.",
        "Flexible Fee Structures and Access: Where possible, promote or introduce flexible fee or payment arrangements, long-term payment plans, or sponsorships to keep enrolment up.",
        "Universal Curriculum Planning: The learning experience does not depend on expensive resources and makes children equally able to engage, no matter how much the family can afford.",
        "Nutrition and Health Initiatives: Team with a current food bank or health service to have healthy snacks, lunches, and healthy checks on site.",
        "Advocacy and Referral: Advocate and refer the families to housing help and financial counselling, and emergency relief agencies."
    ],
    partnerships: [
        { name: "The Smith Family", description: "Offers scholarships, learning materials, as well as support to poverty-stricken children through mentorship.", url: "https://www.thesmithfamily.com.au/" },
        { name: "Anglicare Australia", description: "Provides emergency relief services, money advice and affordable housing.", url: "https://www.anglicare.asn.au/" },
        { name: "Mission Australia", description: "Provides community housing and homelessness as well as family services.", url: "https://www.missionaustralia.com.au/" },
        { name: "Foodbank Australia", description: "Occupies a unique place in the provision of food to families in need, providing food and grocery products via schools and community centres.", url: "https://www.foodbank.org.au/" },
        { name: "Local Child and Family Centres", description: "Provide combined services which cover health check-ups, parenting programs and referrals." }
    ],
    resources: {
        educator: [
            { type: "educator", title: "Raising Children Network", authorOrSource: "Raising Children Network", description: "Helpful information to help children at home and through their learning.", url: "https://raisingchildren.net.au/" },
            { type: "educator", title: "Emerging Minds - Community Trauma Toolkit", authorOrSource: "Emerging Minds", description: "How to assist children with adversities.", url: "https://emergingminds.com.au/resources/community-trauma-toolkit/" },
            { type: "educator", title: "The Smith Family - Learning for Life Program", authorOrSource: "The Smith Family", description: "Teaching tools to help disadvantaged school children.", url: "https://www.thesmithfamily.com.au/programs/learning-for-life" },
            { type: "educator", title: "ASIC Moneysmart - Family Budgeting Tools", authorOrSource: "ASIC", description: "Family Financial Literacy Materials.", url: "https://moneysmart.gov.au/budgeting/simple-ways-to-manage-your-money" }
        ],
        children: {
            books: [
                { type: "book", title: "Those Shoes", authorOrSource: "Maribeth Boelts", year: 2007, description: "Wants vs. Needs and empathy." },
                { type: "book", title: "A Chair for My Mother", authorOrSource: "Vera B. Williams", year: 1982, description: "A story of economising towards an important end." },
                { type: "book", title: "Maddi’s Fridge", authorOrSource: "Lois Brandt", year: 2014, description: "Discusses the problem of hunger in children on a level understandable to children." },
                { type: "book", title: "The Teddy Bear", authorOrSource: "David McPhail", year: 2002, description: "Kindness and sharing." }
            ],
            media: [
                { type: "media", title: "Sesame Street - Growing Hope Against Hunger", authorOrSource: "Sesame Street", description: "Learns to have empathy and help support the community.", url: "https://www.youtube.com/watch?v=vhJ6hfbn4x8" },
                { type: "media", title: "Play School Community Pantry Episode", authorOrSource: "Play School", description: "Enjoys the ideas of sharing and caring for food.", url: "https://iview.abc.net.au/video/CH2202H016S00" },
                { type: "media", title: "Daniel Tiger's Neighborhood: Daniel’s Lunch", authorOrSource: "Daniel Tiger's Neighborhood", description: "Models empathy and inclusion.", url: "https://www.youtube.com/watch?v=K6H_sIJy7mI" },
                { type: "media", title: "Little Yarns – Caring for Each Other", authorOrSource: "ABC Kids", description: "An ABC Kids podcast celebrating community care.", url: "https://www.abc.net.au/kidslisten/programs/little-yarns/" }
            ]
        }
    }
};

const socialContexts: PageContent = {
    id: 'social',
    title: 'Social Contexts',
    icon: SocialIcon,
    understanding: [
        "Social contexts in early childhood education are the relations, geographical and societal conditions that affect the health and growth of the community and kids and their families. The contexts include social isolation, geographical remoteness, separation among families or divorce and out-of-home care (OOHC) based on child protection issues. All these circumstances can destabilise, destabilise, and upset normal development by weakening the feeling of belonging and connectedness (Australian Institute of Health and Welfare [AIHW], 2023).",
        "Social isolation might arise in a setting whereby the family does not have linkages with either extended family, friends or the community at large. It can be aggravated in a rural or remote area, where the situations with services and possibilities to participate in societal life are adverse (Department of Social Services, 2021). The dividing of families, which could come in the form of separation and divorce, may inject new elements of stress like financial strains, change of residence and emotional torture to both parents and children (Amato, 2010).",
        "The children of OOHC via foster care, kinship care, and residential care are typically neglected or abused or in the case of younger children, experienced family disruption before removal. Such experiences may have an enduring consequence on attachment, trust and self-esteem (McLean et al., 2019).",
        "Within the spectrum of Bronfenbrenner Ecological System Theory, the contextualisation of social context states the interaction between microsystem relations (relations with family and peers) and mesosystems (schools and community organisations). The factor of secure and stable interrelationships that can alleviate the impacts of social disruption is also cited by the Attachment Theory, which stresses the precedence of consistent relationships (Bowlby, 1969)."
    ],
    impact: {
        intro: "Children may be impacted because of social problems in a variety of ways:",
        points: [
            "Emotional Wellbeing: A Sense of being lonely, rejected or unstable may arise, particularly among children with little contact with their peers or whose care providers keep on changing (Vostanis, 2010).",
            "Behavioural Effects: Unstable social conditions can make children withdrawn, aggressive or have problems with self-regulation.",
            "Learning and Engagement: Disruption of routines and sources of support can defeat concentration, motivation, and other activities involved in early learning.",
            "Family Relations: Co-parenting arrangements may arise due to conflicted situations because of divorce and separation."
        ]
    },
    policy: {
        intro: "Improvements in Australian policy and initiatives that have sought to overcome these problems are:",
        points: [
            "National Framework for Protecting Australia’s Children 2021-2031: Aims to provide the children at OOHC with reliable and nurturing conditions.",
            "Stronger Communities Programme: Invest in community infrastructure to enhance local engagements and involvement.",
            "Family Law Act 1975 (Cth): Covers the child conflicts in the management of separation, with a focus on the best interests of the child.",
            "Connected Beginnings Program: Empower the First Nations community-led initiatives to improve early childhood development.",
            "State-based Child Protection Acts: The legal procedures and childcare provisions are in OOHC."
        ],
        conclusion: "These policies have increased awareness and support but still face obstacles on a system-wide level, including a high turnover in OOHC placements and inadequate specialist services in remote communities."
    },
    strategies: [
        "Cultivate a sense of Belonging: design childhood environments in the classroom that convey to children that they belong in the classroom and out of the classroom (EYLF Principle 1: Secure, respectful, and reciprocal relationships).",
        "Courtesy Coordinate with other professionals to ensure consistency of routine/expectations about children who are affected by OOHC.",
        "Encourage interaction with people at the level of peers, make it happen by planning small group activities, cooperative play, etc.",
        "Family Engagement Initiatives offer convenient times of meetings and alternative means of communication to the parents who are separated or located in different places.",
        "Referral Pathways: Build good connections with child protection agencies, counselling options and community programs to offer comprehensive assistance."
    ],
    partnerships: [
        { name: "Relationships Australia", description: "Provides family counselling, mediation and parenting programs.", url: "https://www.relationships.org.au/" },
        { name: "Australian Red Cross", description: "Telephone-based social support to isolated families.", url: "https://www.redcross.org.au/" },
        { name: "The CREATE Foundation", description: "An advocacy and lobby group for the rights of children and youth in OOHC.", url: "https://create.org.au/" },
        { name: "Royal Flying Doctor Service", description: "Provides medical and wellbeing services to remote people.", url: "https://www.flyingdoctor.org.au/" },
        { name: "Local Neighbourhood Centres", description: "Lead to play groups, community activity, and support groups." }
    ],
    resources: {
        educator: [
            { type: "educator", title: "Be You", authorOrSource: "Be You", description: "Professional learning that will enhance mental health in schools.", url: "https://beyou.edu.au/" },
            { type: "educator", title: "Emerging Minds", authorOrSource: "Emerging Minds", description: "Materials on helping the social and emotional well-being of children.", url: "https://emergingminds.com.au/" },
            { type: "educator", title: "SNAICC", authorOrSource: "SNAICC", description: "Guidelines on culturally safe practice with First Nations children.", url: "https://www.snaicc.org.au/" },
            { type: "educator", title: "Raising Children Network", authorOrSource: "Raising Children Network", description: "Strategies for taking care of children in the context of change within a running family.", url: "https://raisingchildren.net.au/grown-ups/family-diversity/family-changes-separation" }
        ],
        children: {
            books: [
                { type: "book", title: "Two Homes", authorOrSource: "Claire Masurel", year: 2001, description: "A comfort book for children whose parents have parted ways." },
                { type: "book", title: "The Invisible String", authorOrSource: "Patrice Karst", year: 2000, description: "Brings forward the idea of linking people even though the body is away." },
                { type: "book", title: "Wombat Stew", authorOrSource: "Marcia K. Vaughan", year: 1984, description: "Results in collaboration and being friends." },
                { type: "book", title: "A Family is a Family is a Family", authorOrSource: "Sara O’Leary", year: 2016, description: "Has a focus on the family in different forms and shapes." }
            ],
            media: [
                { type: "media", title: "Play School, Special Families Episodes", authorOrSource: "Play School", description: "Shows different kinds of families.", url: "https://iview.abc.net.au/show/play-school-my-family-your-family" },
                { type: "media", title: "Bluey - Grandad Episode", authorOrSource: "Bluey", description: "Discusses intergenerational relations.", url: "https://iview.abc.net.au/video/CH1903V029S00" },
                { type: "media", title: "Sesame Street Divorce Toolkit", authorOrSource: "Sesame Street", description: "Aids children to cope with the changes affecting the family.", url: "https://www.sesamestreet.org/toolkits/divorce" },
                { type: "media", title: "ABC Children Listen - Imagine This Podcast", authorOrSource: "ABC", description: "Stimulates inquisitiveness, dialogue.", url: "https://www.abc.net.au/kidslisten/programs/imagine-this/" }
            ]
        }
    }
};

const culturalContexts: PageContent = {
    id: 'cultural',
    title: 'Cultural and Diversity Contexts',
    icon: DiversityIcon,
    understanding: [
        "The cultural and diversity contexts of early childhood education deal with the experiences, values, and needs of those families with different cultural backgrounds, including those of First Nations families, immigrant families, and refugee families. Australia is a multicultural community, the situation is determined by different migration backgrounds, the Aboriginal cultures have a historical past of tens of thousands of years, and patterns of settlement and re-settlement continue (Australian Bureau of Statistics [ABS], 2023).",
        "Aboriginal and Torres Strait Islander peoples and their families are historically and currently affected by colonisation, leading to the dispossession of certain Aboriginal and Torres Strait Islander peoples, systemic racism and the intergenerational consequences of the Stolen Generations (Human Rights and Equal Opportunity Commission, 1997). Although culturally strong and resistant, there is a great number of First Nations children being over-represented in the child protection systems and experiencing inequities in health, education, and housing (AIHW, 2023).",
        "Language barriers, being inexperienced with the Australian education system, credential recognition, and stressful adaptation to the cultural context are some of the issues immigrant families might face. The 3 Rs refugee families frequently come in having escaped war, persecution, or catastrophe, and having had the experiences of trauma, loss, and interrupted learning (Refugee Council of Australia, 2023).",
        "The Ecological Systems Theory, developed by Bronfenbrenner, reveals the way in which culture functions through the macrosystem and affects the experiences of all other systems in children. Social interaction, the use of tools and language, and cultural tools have been emphasised by Vygotsky under Sociocultural Theory toward cognitive development (Vygotsky, 1978). However, Cultural Competence Frameworks point to the aptitude of educators on how they can respect and incorporate diversity, which is also featured on the Early Years Learning Framework (EYLF, Principle 4: respect for diversity)."
    ],
    impact: {
        intro: "The cultural difference adds value to the learning environment, but may also become a problem when systems are not inclusive:",
        points: [
            "With the First Nations children, these barriers can comprise culturally unsafe learning environments, minimal integration of the Indigenous languages in teaching and a lack of sufficient voice of Indigenous persons in the curriculum.",
            "In the case of immigrant and refugee children, transition could include the adaptation of new languages, ways of social interactions and expectations, and this could affect confidence and participation.",
            "In the case of families, lack of cultural responsiveness in communications may result in cases of misunderstanding, withdrawal in using the services or mistrusting the institutions."
        ]
    },
    policy: {
        intro: "Among the major national and state-based responses are:",
        points: [
            "National Agreement on Closing the Gap with Labour and its partners fell short of its goal in achieving improved health, education, and wellbeing outcomes of Aboriginal and Torres Strait Islander peoples.",
            "Early Years Learning Framework (EYLF) - Includes cultural competence as a provision to guide the teachers.",
            "Multicultural Access and Equity Policy - Government services that are in respond to cultural diversity.",
            "Settlement Engagement and Transition Support (SETS) Program - Can help migrants and refugees who have just arrived in the community achieve connections and access to services.",
            "Refugee and Humanitarian Program: Offers resettlement assistance such as health, language and education."
        ],
        conclusion: "These efforts have achieved success but are not without challenges, including bilingual support in early learning that is underfunded, the extremely low numbers of First Nations educators, and variances in trauma care support of refugee children (O’Connor et al., 2021)."
    },
    strategies: [
        "Integrate Cultural Content within the Curriculum: embed First Nations views, multicultural festivals and bilingual materials into the curriculum all year (not simply on special events).",
        "Apply Interpreters and Translated Materials: Make sure the families get information in a language they prefer to use, to make sure they have an authentic engagement.",
        "Culturally Safe Environments: Put visual reminders (art, flags, books) of the cultural background of children.",
        "Participation and Family Storytelling: Encourage families to share the cultural traditions, stories, as well as music within the learning area.",
        "Continuing Professional Development: Participate in educational sessions on cultural competence, anti-bias practices and trauma-informed processes."
    ],
    partnerships: [
        { name: "SNAICC - National Voice for Our Children", description: "Representatives of the First Nations children’s rights and cultural belonging.", url: "https://www.snaicc.org.au/" },
        { name: "Refugee Council of Australia", description: "A resource, upholding advocacy and refugee community offerings.", url: "https://www.refugeecouncil.org.au/" },
        { name: "Multicultural NSW", description: "Provides language programs and multicultural involvement programs.", url: "https://multicultural.nsw.gov.au/" },
        { name: "Reconciliation Australia", description: "Works with reconciliation activities and RAPs.", url: "https://www.reconciliation.org.au/" },
        { name: "AMES Australia", description: "Assists migrants and refugees by way of provision of settlement, language and employment.", url: "https://ames.net.au/" }
    ],
    resources: {
        educator: [
            { type: "educator", title: "Narragunnawali", authorOrSource: "Reconciliation Australia", description: "Reconciliation in Schools and Early Learning Services.", url: "https://www.narragunnawali.org.au/" },
            { type: "educator", title: "MyTime", authorOrSource: "MyTime", description: "Helps culturally diverse parents and carers of children with extra needs.", url: "https://www.mytime.net.au/" },
            { type: "educator", title: "Foundation House Resources", authorOrSource: "Foundation House", description: "Works with children, refugees, and asylum seekers.", url: "https://foundationhouse.org.au/resources/publications-and-resources/" },
            { type: "educator", title: "Raising Children Network Multicultural Parenting Resources", authorOrSource: "Raising Children Network", description: "Realistic parenting tips in many languages.", url: "https://raisingchildren.net.au/grown-ups/family-diversity/culture-religion" }
        ],
        children: {
            books: [
                { type: "book", title: "Welcome to Country", authorOrSource: "Aunty Joy Murphy & Lisa Kennedy", year: 2016, description: "Presents indigenous culture and traditions of First Nations people." },
                { type: "book", title: "Mirror", authorOrSource: "Jeannie Baker", year: 2010, description: "Similar fates of two boys belonging to different cultures." },
                { type: "book", title: "My Two Blankets", authorOrSource: "Irena Kobald & Freya Blackwood", year: 2014, description: "Language barriers/friendship." },
                { type: "book", title: "Why I Love Australia", authorOrSource: "Bronwyn Bancroft", year: 2010, description: "A celebration of Australia by Indigenous art in terms of land." }
            ],
            media: [
                { type: "media", title: "Little J & Big Cuz", authorOrSource: "NITV", description: "Animated series about First Nations culture.", url: "https://iview.abc.net.au/show/little-j-and-big-cuz" },
                { type: "media", title: "Play School - Harmony Day Special", authorOrSource: "Play School", description: "Celebrates Cultural diversity in Australia.", url: "https://iview.abc.net.au/video/CH1902H008S00" },
                { type: "media", title: "Sesame Street Global Grover series", authorOrSource: "Sesame Street", description: "Looks at world customs.", url: "https://www.youtube.com/watch?v=Rjr2A9jLRGQ&list=PLj2q3ZYlVyfvMJhAhY5aS4p-59EC82VF7" },
                { type: "media", title: "Behind the News - Refugee Week Segments", authorOrSource: "Behind the News", description: "Age-appropriate current affairs coverage on 'Refugee Week Segments'.", url: "https://www.abc.net.au/btn/classroom/refugee-week/12349272" }
            ]
        }
    }
};

const healthWellbeingContexts: PageContent = {
    id: 'health',
    title: 'Health and Wellbeing Contexts',
    icon: HealthIcon,
    understanding: [
        "Context about health and well-being within early childhood education includes physical health, mental health, emotional well-being and safety. They also entail the effect of parental mental illness, drug, trauma, loss and abuse to children and families. Early childhood is also a sensitive area in terms of brain development whereby stable, nurturing bonds and secure situations form the precursor of lifelong wellbeing (Shonkoff et al., 2012).",
        "Mental sickness in parents may influence the ability of the parent, the levels of emotional availability, and consistency in parenting (Maybery et al., 2015). Neglect, exposure to hazardous conditions and financial insecurity may arise because of substance use within the families. Attachment patterns and stress coping can be disturbed in children by traumatic situations such as loss of a family member, crimes or displacement through violence (Perry, 2006). Physical, emotional, and sexual abuse have long term effects that lead to poor physical health, intellectual functions, and emotional stability.",
        "In Trauma-Informed Care terms, educators must know about the widespread impact of trauma on people and apply to them the measures that foster safety, trust, and empowerment (Substance Abuse and Mental Health Services Administration [SAMHSA], 2014). Hierarchy of Needs proposed by Maslow also points to the fact that the physiological and safety needs of children should be satisfied before the occurrence of higher-order learning."
    ],
    impact: {
        intro: "The consequences of well-being and health issues may be massive:",
        points: [
            "Physical Development: The stress associated with unsafe or unstable surroundings may damage development and the immune system.",
            "Cognitive Development: Trauma and neglect can hurt distributed memory, the ability to have problems and executive functioning (Teicher et al., 2016).",
            "Emotional Regulation: painful experiences may lead to children being excessively nervous, closed off, belligerent, or nowhere moving to build safe bonds.",
            "Functioning of the family: Ineffective parental health can lessen the possibility of the family participating in educational services or achieving the constitutional needs of the children."
        ]
    },
    policy: {
        intro: "A few guiding frameworks and essential policies tackle the problem of health and well-being among children.",
        points: [
            "National Mental Health Strategy: Encouraging the mental health and wellbeing of the population and has its emphasis on prevention and early intervention.",
            "National Framework for Protecting Australia’s Children 2021-2031: Focuses on the desire for safety and stability among the kids at risk.",
            "Child Safe Standards: Organisational strategies on prevention and response to abuse are compulsory.",
            "National Drug Strategy 2017-2026: Key priorities are to limit harm that drugs, especially alcohol and tobacco, can cause.",
            "Be You: A national program to empower educators to support mental health promotion in schools and in early learning."
        ],
        conclusion: "Although such a policy has produced beneficial support systems, issues concerning the accessibility of services and cultural safety are still challenges, especially in rural and native communities."
    },
    strategies: [
        "Embrace Trauma-Informed Practices: Establish predictability within routines and provide choice when appropriate and seek to avoid triggers that may prove distressing.",
        "Establish Trusting Relationships: Be a supportive and consistent adult in a child’s life.",
        "Allied Health Professionals Connections: Work closely with psychologists, speech pathologists, and occupational therapists to address the whole needs of a child.",
        "Incorporate Wellbeing into Curriculum: Incorporate mindfulness, yoga, and social-emotional learning into the classroom curricula in order to develop coping skills.",
        "Refer families to programs/services: Refer parents into treatment, support groups like bereavement services, and drug and alcohol treatment."
    ],
    partnerships: [
        { name: "Beyond Blue", description: "Assistance on mental health to individuals and families.", url: "https://www.beyondblue.org.au/" },
        { name: "Kids Helpline", description: "Children and young people’s counselling/advice.", url: "https://kidshelpline.com.au/" },
        { name: "Australian Childhood Foundation", description: "Organisation that deals specifically with traumatised children.", url: "https://www.childhood.org.au/" },
        { name: "headspace", description: "Mental health service for young people and families.", url: "https://headspace.org.au/" },
        { name: "1800RESPECT", description: "National Sexual Assault, Domestic and Family Violence Counselling Service for crisis support and counselling.", url: "https://www.1800respect.org.au/" }
    ],
    resources: {
        educator: [
            { type: "educator", title: "Be You", authorOrSource: "Be You", description: "In this course, you will learn how to encourage one to be professionally engaged in raising mental health in educational settings.", url: "https://beyou.edu.au/" },
            { type: "educator", title: "Child Wise", authorOrSource: "Child Wise", description: "Child safety and abuse prevention.", url: "https://www.childwise.org.au/" },
            { type: "educator", title: "Phoenix Australia", authorOrSource: "Phoenix Australia", description: "Trauma-informed guidance practice.", url: "https://www.phoenixaustralia.org/" },
            { type: "educator", title: "Australian Institute of Family Studies - CFCA Papers", authorOrSource: "AIFS", description: "Evidence-based practices to family wellbeing.", url: "https://aifs.gov.au/research/cfca" }
        ],
        children: {
            books: [
                { type: "book", title: "The Huge Bag of Worries", authorOrSource: "Virginia Ironside", year: 1993, description: "Assists young children to deal with anxiety." },
                { type: "book", title: "The Invisible String", authorOrSource: "Patrice Karst", year: 2000, description: "Helps deal with the separation and loss in children." },
                { type: "book", title: "A Terrible Thing Happened", authorOrSource: "Margaret Holmes", year: 2000, description: "It deals with the trauma effect." },
                { type: "book", title: "When Sophie Gets Angry - Really, Really Angry...", authorOrSource: "Molly Bang", year: 1999, description: "Learns control of emotions." }
            ],
            media: [
                { type: "media", title: "Sesame Street - Traumatic Experiences Resources", authorOrSource: "Sesame Street", description: "Resources tools to help children in traumatic situations.", url: "https://www.sesamestreet.org/toolkits/traumaticexperiences" },
                { type: "media", title: "Bluey – Sleepytime Episode", authorOrSource: "Bluey", description: "Promotes emotional security and predictability.", url: "https://iview.abc.net.au/video/CH1903V039S00" },
                { type: "media", title: "ABC Kids Listen - Mindfully Musical", authorOrSource: "ABC Kids Listen", description: "Music with mindful practice.", url: "https://www.abc.net.au/kidslisten/programs/mindfully-musical/" },
                { type: "media", title: "Cosmic Kids Yoga", authorOrSource: "Cosmic Kids", description: "Online/on-demand children’s yoga and mindfulness programs.", url: "https://www.youtube.com/c/CosmicKidsYoga" }
            ]
        }
    }
};

const crisisEmergencyContexts: PageContent = {
    id: 'crisis',
    title: 'Crisis and Emergency Contexts',
    icon: CrisisIcon,
    understanding: [
        "Crisis and emergency settings are defined as any event or situation that substantially changes the lives of children and families, including natural disasters, climate-related emergencies, family violence and forced displacement. The occurrence of such events is very abrupt and does not allow much preparation, imposing a great emotional, financial, and physical burden on families. The level and the occurrence of climate-related hazards in Australia have been rising (partly attributable to climate change), and this has included hazards such as bushfires, floods, and cyclones (Hughes et al., 2020). Such occurrences may cause loss of household property, livelihood, alienation of their communities, and dislocation to schools.",
        "One of the other crisis contexts that heavily influences the population is family violence. One in every six women and one in every sixteen men in Australia have experienced family violence since 15 (Australian Institute of Health and Welfare [AIHW], 2022). Children exposed to or being exposed to family violence tend to have safety problems in the short term and psychological impacts in the long run.",
        "Chronic instability may arise because of displacement, which might be caused either by natural disasters, violence, or the housing crisis. Families that are moved out, especially those that reside in makeshift shelters, can be severely displaced, and this places a strain on the security and belonging of children.",
        "The Ecological Systems Theory proposed by Bronfenbrenner demonstrates the interdependence of crises in macrosystem (e.g. climate events) into all other systems, which also influences and affects family life and educational environment. According to the Resilience Theory, the adapting skills of children who tend to live in crises may be secured by protective factors, including positive relationships and problem-solving (Masten, 2014)."
    ],
    impact: {
        intro: "Crisis effects are many and oftentimes devastating:",
        points: [
            "Emotional Wellbeing: Children can become anxious, scared, grief-stricken, and even develop post-traumatic stress.",
            "Cognitive Development: Due to the disruptions in schooling, learning can be delayed and lower academic progress.",
            "Social Relationships: The loss of the familiar networks in the community can cause the loss of social support as well as isolation.",
            "Family Stability: Parents might not have stable jobs and shelter, and they cannot afford basic needs."
        ]
    },
    policy: {
        intro: "The most important national and state policies in this regard are:",
        points: [
            "National Disaster Risk Reduction Framework: Seeks to ensure that disaster risk is reduced and community resilience is built.",
            "Disaster Recovery Funding Arrangements (DRFA): It prevents and mitigates the impact of disasters through post-disaster assistance to people, households, and local governments.",
            "National Plan to End Violence Against Women and Children 2022-2032: (Prevents, earns, intervenes, responds, and recovers) on family violence.",
            "Australian Red Cross Emergency Services: Provides psychosocial care and treatment and recovery services to affected communities.",
            "Child Safe Standards: This will make sure that organisations address child safety risks effectively during crises."
        ],
        conclusion: "Although these frameworks provide a safeguarding layer, there are still implementation difficulties, more so in rural regions where the supply of services is low and response to disasters may take longer."
    },
    strategies: [
        "Safety and Basic Needs First: There is no point trying to get children to do schoolwork before addressing their need to feel safe, fed, and found.",
        "Administer Psychological First Aid (PFA): Do not force the children to talk about the traumatic memories; provide firsthand treatment to make them feel calm and comfortable.",
        "Stick With Familiar Routines: Routine things will create normalcy and security.",
        "Expressive Activities: To release emotions using stories, play and art.",
        "Partner with Crisis Services: Partner with local emergency services, counsellors, and family violence experts to be able to offer full support."
    ],
    partnerships: [
        { name: "Australian Red Cross", description: "Emergency response and recovery, and rebuilding of displaced families.", url: "https://www.redcross.org.au/emergencies/" },
        { name: "Save the Children Australia", description: "Offers disaster response focused on children as well as educational continuity.", url: "https://www.savethechildren.org.au/our-work/in-australia/emergencies" },
        { name: "1800RESPECT", description: "24-hour National counselling service helping to end family violence and sexual assault.", url: "https://www.1800respect.org.au/" },
        { name: "Lifeline Australia", description: "Crisis support and suicide prevention services.", url: "https://www.lifeline.org.au/" },
        { name: "State Emergency Service (SES)", description: "Emergency response teams of volunteers located within communities.", url: "https://www.ses.nsw.gov.au/" }
    ],
    resources: {
        educator: [
            { type: "educator", title: "Psychological First Aid Guide", authorOrSource: "Australian Red Cross", description: "Practical problem solving to help people in emergency conditions.", url: "https://www.redcross.org.au/get-involved/learn/first-aid/psychological-first-aid" },
            { type: "educator", title: "Our Watch", authorOrSource: "Our Watch", description: "Prevention work – preventing family violence resources.", url: "https://www.ourwatch.org.au/" },
            { type: "educator", title: "UNICEF Emergency Preparedness in ECE", authorOrSource: "UNICEF", description: "Guidance on establishing safe learning environments during emergency.", url: "https://www.unicef.org/documents/comprehensive-school-safety-framework-2022-2030" },
            { type: "educator", title: "Be You Responding Together", authorOrSource: "Be You", description: "Mental health strategies after natural disasters.", url: "https://beyou.edu.au/fact-sheets/disasters-and-community-trauma/responding-together-community-trauma" }
        ],
        children: {
            books: [
                { type: "book", title: "Flood", authorOrSource: "Jackie French & Bruce Whatley", year: 2011, description: "Account of flood recovery to a community." },
                { type: "book", title: "Fire", authorOrSource: "Jackie French & Bruce Whatley", year: 2014, description: "Portrays bushfires’ resiliency." },
                { type: "book", title: "The Day War Came", authorOrSource: "Nicola Davies", year: 2018, description: "Calls attention to the loss of home because of war." },
                { type: "book", title: "When the Wind Blows", authorOrSource: "Linda Booth Sweeney", year: 2015, description: "Teaches children about storms and getting ready." }
            ],
            media: [
                { type: "media", title: "Play School Bushfire Special", authorOrSource: "Play School", description: "Helps children deal with the experience of a natural disaster.", url: "https://iview.abc.net.au/show/play-school-hello-friends" },
                { type: "media", title: "Emergency preparedness – Sesame Street", authorOrSource: "Sesame Street", description: "Teaches the importance of safety in friendly ways.", url: "https://www.sesamestreet.org/toolkits/emergency" },
                { type: "media", title: "BTN - Natural Disasters Segments", authorOrSource: "Behind the News", description: "Age-appropriate explanations of the events of disasters.", url: "https://www.abc.net.au/btn/classroom/natural-disasters/10534928" },
                { type: "media", title: "Little J & Big Cuz Community Safety Episodes", authorOrSource: "Little J & Big Cuz", description: "Community Safety Awareness in a First Nations Environment.", url: "https://www.youtube.com/watch?v=RMaG8h2m8MA" }
            ]
        }
    }
};

export const pagesData = {
    home: { id: 'home', title: 'Home', icon: HomeIcon },
    economic: economicContexts,
    social: socialContexts,
    cultural: culturalContexts,
    health: healthWellbeingContexts,
    crisis: crisisEmergencyContexts,
    conclusion: { id: 'conclusion', title: 'Conclusion', icon: ConclusionIcon },
    references: { id: 'references', title: 'References', icon: ResourcesIcon }
};


export const conclusionContent: string[] = [
    "This web-based tool has touched upon the varied, complicated and interconnected contexts that influence the lives of children, families and communities in the modern Australian society. A combination of economic, social, cultural and diversity, health and wellbeing, and crisis and emergency contexts, are systems that create layered and frequently overlapping issues that impact the development, learning and wellbeing of children within families. Using sociological theories like the Ecological Systems Theory developed by Bronfenbrenner, the Hierarchy of Needs by Maslow, the Attachment theory, and Resilience theory, the analysis shows that, factors that include the individual, family, the community and the society play a critical role in defining the outcome of children. There is evidence that relatively safe, consistent, and culturally sensitive early childhood environments can greatly attenuate the effects of adversity.",
    "Australian policies and initiatives, which have been reviewed, demonstrate a diverse and varied landscape of support. Although the National Framework for Protecting Australia’s Children, the Be You and the National Disaster Risk Reduction Framework provide sound frameworks, the most effective one requires the presence of easy access to services, collaboration of agencies and continuous professional development of educators.",
    "The plans discussed under each situation also highlight how the educator can contribute to making the environment safer, more accepting, and resilience-building; how to build effective partnerships with the families and community organisations. Not only are these methods consistent with the Early Years Learning Framework (EYLF) and National Quality Standard (NQS), but they will also strengthen the collective social responsibility of early childhood professionals as an agent of choice to promote equity and wellbeing.",
    "Finally, the resource highlights the need to implement a strategy, proactive and partnership oriented. Through the integration of theory-informed practice, evidence-based practices, as well as effective community networks, early childhood educators have the capability of playing a significant role in ensuring that all children and families prosper despite the difficulties they may be experiencing. This joint, data-driven endeavour plays a role in creating resilient communities, and all children get an opportunity to fulfil their potential."
];

export const referencesContent: Reference[] = [
    {
        key: "abs2022",
        citation: "Australian Bureau of Statistics. (2022). <em>Personal safety, Australia</em> (Catalogue No. 4906.0).",
        url: "https://www.abs.gov.au/statistics/people/crime-and-justice/personal-safety-australia"
    },
    {
        key: "acoss2022",
        citation: "Australian Council of Social Service. (2022). <em>Poverty in Australia 2022: A snapshot</em>. ACOSS.",
        url: "https://www.acoss.org.au/poverty"
    },
    {
        key: "homeaffairs2018",
        citation: "Australian Government Department of Home Affairs. (2018). <em>National disaster risk reduction framework</em>.",
        url: "https://www.homeaffairs.gov.au/emergency/files/national-disaster-risk-reduction-framework.pdf"
    },
    {
        key: "dss2022",
        citation: "Australian Government Department of Social Services. (2022). <em>National plan to end violence against women and children 2022–2032</em>.",
        url: "https://www.dss.gov.au/"
    },
    {
        key: "ahrc2021",
        citation: "Australian Human Rights Commission. (2021). <em>Wiyi Yani U Thangani (Women’s voices): Securing our rights, securing our future report</em>.",
        url: "https://humanrights.gov.au/our-work/aboriginal-and-torres-strait-islander-social-justice/publications/wiyi-yani-u-thangani"
    },
    {
        key: "bandura1977",
        citation: "Bandura, A. (1977). <em>Social learning theory</em>. Prentice-Hall."
    },
    {
        key: "benevolent2023",
        citation: "Benevolent Society. (2023). <em>Family support services</em>.",
        url: "https://www.benevolent.org.au"
    },
    {
        key: "bowlby1969",
        citation: "Bowlby, J. (1969). <em>Attachment and loss: Vol. 1. Attachment</em>. Basic Books."
    },
    {
        key: "bronfenbrenner1979",
        citation: "Bronfenbrenner, U. (1979). <em>The ecology of human development: Experiments by nature and design</em>. Harvard University Press."
    },
    {
        key: "bom2022",
        citation: "Bureau of Meteorology. (2022). <em>State of the climate 2022</em>. Australian Government.",
        url: "http://www.bom.gov.au/state-of-the-climate/"
    },
    {
        key: "education2023",
        citation: "Department of Education. (2023). <em>Early childhood education policy and programs</em>. Australian Government.",
        url: "https://www.education.gov.au/"
    },
    {
        key: "deewr2009",
        citation: "Department of Education, Employment and Workplace Relations (DEEWR). (2009). <em>Belonging, being and becoming: The Early Years Learning Framework for Australia</em>. Australian Government."
    },
    {
        key: "foundationhouse2020",
        citation: "Foundation House. (2020). <em>Schools in for refugees: Whole-school guide to refugee readiness</em>. Victorian Foundation for Survivors of Torture.",
        url: "https://foundationhouse.org.au/"
    },
    {
        key: "kidshelpline2023",
        citation: "Kids Helpline. (2023). <em>Free counselling service for children and young people</em>.",
        url: "https://kidshelpline.com.au/"
    },
    {
        key: "mclachlan2018",
        citation: "McLachlan, C., Fleer, M., & Edwards, S. (2018). <em>Early childhood curriculum: Planning, assessment and implementation</em> (3rd ed.). Cambridge University Press."
    },
    {
        key: "masten2012",
        citation: "Masten, A. S., & Narayan, A. J. (2012). Child development in the context of disaster, war, and terrorism: Pathways of risk and resilience. <em>Annual Review of Psychology, 63</em>(1), 227–257.",
        url: "https://doi.org/10.1146/annurev-psych-120710-100356"
    },
    {
        key: "parkes2015",
        citation: "Parkes, A., Sweeting, H., & Wight, D. (2025). Parenting stress and parent support among mothers with high and low education. <em>Journal of Family Issues, 36</em>(3), 351–370.",
        url: "https://doi.org/10.1177/0192513X13490281"
    },
    {
        key: "phillips2022",
        citation: "Phillips, R., & Gray, S. (2022). Housing instability and its impact on early childhood development in Australia. <em>Australian Journal of Early Childhood, 47</em>(1), 35–48.",
        url: "https://doi.org/10.1177/18369391211054867"
    },
    {
        key: "snaicc2020",
        citation: "Secretariat of National Aboriginal and Islander Child Care. (2020). <em>The Family Matters Report 2020</em>. SNAICC.",
        url: "https://www.familymatters.org.au/"
    },
    {
        key: "unicef2021",
        citation: "UNICEF Australia. (2021). <em>The impact of climate change on children in Australia</em>.",
        url: "https://www.unicef.org.au"
    }
];