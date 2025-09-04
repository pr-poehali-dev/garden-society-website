import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import Icon from '@/components/ui/icon';

const GardenCooperativeWebsite = () => {
  const [activeSection, setActiveSection] = useState('home');

  const newsItems = [
    {
      id: 1,
      title: "Собрание садоводов 15 октября",
      date: "2024-10-10",
      category: "Объявления",
      excerpt: "Обсудим планы на следующий сезон и бюджет на 2025 год.",
      urgent: true
    },
    {
      id: 2,
      title: "Завершение работ по водоснабжению",
      date: "2024-10-08",
      category: "Новости",
      excerpt: "Все участки подключены к центральному водопроводу.",
      urgent: false
    },
    {
      id: 3,
      title: "Субботник 21 октября",
      date: "2024-10-05",
      category: "Мероприятия",
      excerpt: "Уборка территории общего пользования.",
      urgent: false
    }
  ];

  const financialData = [
    { category: "Водоснабжение", amount: 850000, percentage: 45 },
    { category: "Электричество", amount: 320000, percentage: 17 },
    { category: "Дороги", amount: 480000, percentage: 25 },
    { category: "Охрана", amount: 245000, percentage: 13 }
  ];

  const documents = [
    { name: "Устав СНТ", type: "PDF", size: "2.4 МБ", date: "2024-01-15" },
    { name: "Протокол собрания", type: "PDF", size: "1.8 МБ", date: "2024-09-20" },
    { name: "Тарифы на 2024", type: "PDF", size: "0.5 МБ", date: "2024-03-10" },
    { name: "Правила внутреннего порядка", type: "PDF", size: "3.1 МБ", date: "2024-01-01" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-garden-bg via-green-50 to-blue-50 font-open">
      {/* Header */}
      <header className="bg-white/90 backdrop-blur-sm border-b border-garden-green/20 sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-r from-garden-green to-garden-light rounded-full flex items-center justify-center">
                <Icon name="TreePine" size={24} className="text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-montserrat font-bold text-garden-dark">СНТ "Зелёная Долина"</h1>
                <p className="text-sm text-gray-600">Садовое некоммерческое товарищество</p>
              </div>
            </div>
            
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="md:hidden">
                  <Icon name="Menu" size={20} />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80">
                <SheetHeader>
                  <SheetTitle>Навигация</SheetTitle>
                </SheetHeader>
                <nav className="mt-6 space-y-4">
                  {[
                    { id: 'home', label: 'Главная', icon: 'Home' },
                    { id: 'news', label: 'Новости', icon: 'Newspaper' },
                    { id: 'documents', label: 'Документы', icon: 'FileText' },
                    { id: 'payments', label: 'Платежи', icon: 'CreditCard' },
                    { id: 'contacts', label: 'Контакты', icon: 'Phone' }
                  ].map((item) => (
                    <Button
                      key={item.id}
                      variant="ghost"
                      className="w-full justify-start"
                      onClick={() => setActiveSection(item.id)}
                    >
                      <Icon name={item.icon} size={18} className="mr-3" />
                      {item.label}
                    </Button>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>

            <nav className="hidden md:flex items-center space-x-2">
              {[
                { id: 'home', label: 'Главная', icon: 'Home' },
                { id: 'news', label: 'Новости', icon: 'Newspaper' },
                { id: 'documents', label: 'Документы', icon: 'FileText' },
                { id: 'payments', label: 'Платежи', icon: 'CreditCard' },
                { id: 'contacts', label: 'Контакты', icon: 'Phone' }
              ].map((item) => (
                <Button
                  key={item.id}
                  variant={activeSection === item.id ? "default" : "ghost"}
                  className="flex items-center space-x-2"
                  onClick={() => setActiveSection(item.id)}
                >
                  <Icon name={item.icon} size={18} />
                  <span>{item.label}</span>
                </Button>
              ))}
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-garden-green/10 to-garden-light/10">
        <div className="container mx-auto px-6 text-center">
          <div className="animate-fade-in">
            <h2 className="text-5xl font-montserrat font-bold text-garden-dark mb-6">
              Добро пожаловать в СНТ "Зелёная Долина"
            </h2>
            <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
              Современное садовое товарищество с развитой инфраструктурой, 
              онлайн-сервисами и активным сообществом садоводов
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-garden-green hover:bg-garden-green/90">
                <Icon name="Users" size={20} className="mr-2" />
                Стать членом СНТ
              </Button>
              <Button size="lg" variant="outline" className="border-garden-green text-garden-green">
                <Icon name="MapPin" size={20} className="mr-2" />
                Найти участок
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: 'Участков', value: '247', icon: 'MapPin', color: 'garden-green' },
              { label: 'Семей', value: '189', icon: 'Users', color: 'garden-light' },
              { label: 'Гектаров', value: '52', icon: 'TreePine', color: 'garden-yellow' },
              { label: 'Лет работы', value: '28', icon: 'Calendar', color: 'garden-red' }
            ].map((stat, index) => (
              <Card key={index} className="text-center animate-scale-in hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className={`w-12 h-12 bg-${stat.color}/10 rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <Icon name={stat.icon} size={24} className={`text-${stat.color}`} />
                  </div>
                  <div className={`text-3xl font-montserrat font-bold text-${stat.color} mb-1`}>
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="py-12">
        <div className="container mx-auto px-6">
          <Tabs value={activeSection} className="space-y-8">
            {/* News Section */}
            <TabsContent value="news" className="space-y-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {newsItems.map((news) => (
                  <Card key={news.id} className="hover:shadow-lg transition-all duration-300 animate-slide-up">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant={news.urgent ? "destructive" : "secondary"} className="text-xs">
                          {news.category}
                        </Badge>
                        {news.urgent && (
                          <Badge className="bg-garden-red text-white">
                            <Icon name="AlertTriangle" size={12} className="mr-1" />
                            Важно
                          </Badge>
                        )}
                      </div>
                      <CardTitle className="text-lg font-montserrat">{news.title}</CardTitle>
                      <CardDescription className="text-sm text-gray-500">{news.date}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700 mb-4">{news.excerpt}</p>
                      <Button variant="outline" size="sm" className="w-full">
                        <Icon name="ArrowRight" size={16} className="ml-2" />
                        Читать далее
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Documents Section */}
            <TabsContent value="documents" className="space-y-6">
              <Card className="animate-fade-in">
                <CardHeader>
                  <CardTitle className="font-montserrat text-garden-dark">Документы СНТ</CardTitle>
                  <CardDescription>Устав, протоколы, регламенты и другие документы</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {documents.map((doc, index) => (
                      <div key={index} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                        <div className="flex items-center space-x-4">
                          <div className="w-10 h-10 bg-garden-red/10 rounded-lg flex items-center justify-center">
                            <Icon name="FileText" size={20} className="text-garden-red" />
                          </div>
                          <div>
                            <h4 className="font-medium text-garden-dark">{doc.name}</h4>
                            <p className="text-sm text-gray-500">{doc.type} • {doc.size} • {doc.date}</p>
                          </div>
                        </div>
                        <Button variant="ghost" size="sm">
                          <Icon name="Download" size={16} />
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Payments Section */}
            <TabsContent value="payments" className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="animate-scale-in">
                  <CardHeader>
                    <CardTitle className="font-montserrat text-garden-dark">Финансы СНТ</CardTitle>
                    <CardDescription>Распределение бюджета на 2024 год</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {financialData.map((item, index) => (
                        <div key={index} className="space-y-2">
                          <div className="flex justify-between items-center">
                            <span className="text-sm font-medium">{item.category}</span>
                            <span className="text-sm text-gray-600">
                              {item.amount.toLocaleString()} ₽ ({item.percentage}%)
                            </span>
                          </div>
                          <Progress value={item.percentage} className="h-2" />
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="animate-scale-in">
                  <CardHeader>
                    <CardTitle className="font-montserrat text-garden-dark">Онлайн платежи</CardTitle>
                    <CardDescription>Оплата взносов и услуг</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <Button className="w-full bg-garden-green hover:bg-garden-green/90">
                      <Icon name="CreditCard" size={18} className="mr-2" />
                      Оплатить членские взносы
                    </Button>
                    <Button variant="outline" className="w-full">
                      <Icon name="Receipt" size={18} className="mr-2" />
                      Коммунальные услуги
                    </Button>
                    <Button variant="outline" className="w-full">
                      <Icon name="Wrench" size={18} className="mr-2" />
                      Дополнительные услуги
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Contacts Section */}
            <TabsContent value="contacts" className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="animate-fade-in">
                  <CardHeader>
                    <CardTitle className="font-montserrat text-garden-dark">Контактная информация</CardTitle>
                    <CardDescription>Связь с правлением СНТ</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Icon name="User" size={20} className="text-garden-green" />
                      <div>
                        <p className="font-medium">Председатель: Иванов И.И.</p>
                        <p className="text-sm text-gray-600">+7 (903) 123-45-67</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Icon name="MapPin" size={20} className="text-garden-light" />
                      <div>
                        <p className="font-medium">Адрес офиса</p>
                        <p className="text-sm text-gray-600">г. Москва, ул. Садовая, д. 123</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Icon name="Mail" size={20} className="text-garden-yellow" />
                      <div>
                        <p className="font-medium">E-mail</p>
                        <p className="text-sm text-gray-600">info@snt-zelenaya-dolina.ru</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Icon name="Clock" size={20} className="text-garden-red" />
                      <div>
                        <p className="font-medium">Режим работы</p>
                        <p className="text-sm text-gray-600">Пн-Пт: 9:00-18:00, Сб: 10:00-15:00</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="animate-fade-in">
                  <CardHeader>
                    <CardTitle className="font-montserrat text-garden-dark">Часто задаваемые вопросы</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Accordion type="single" collapsible>
                      <AccordionItem value="item-1">
                        <AccordionTrigger>Как вступить в СНТ?</AccordionTrigger>
                        <AccordionContent>
                          Для вступления необходимо подать заявление в правление, предоставить документы и внести вступительный взнос.
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-2">
                        <AccordionTrigger>Размер членских взносов?</AccordionTrigger>
                        <AccordionContent>
                          Членские взносы составляют 15 000 рублей в год. Оплата производится до 31 мая текущего года.
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-3">
                        <AccordionTrigger>Есть ли электричество и вода?</AccordionTrigger>
                        <AccordionContent>
                          Да, все участки подключены к центральному электроснабжению и водопроводу. Также проведён интернет.
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Default Home Content */}
            <TabsContent value="home" className="space-y-8">
              {/* News Preview */}
              <section>
                <h3 className="text-2xl font-montserrat font-bold text-garden-dark mb-6">Последние новости</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  {newsItems.slice(0, 3).map((news) => (
                    <Card key={news.id} className="hover:shadow-lg transition-all duration-300 animate-slide-up">
                      <CardHeader>
                        <Badge variant={news.urgent ? "destructive" : "secondary"} className="text-xs w-fit">
                          {news.category}
                        </Badge>
                        <CardTitle className="text-lg font-montserrat">{news.title}</CardTitle>
                        <CardDescription>{news.date}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-700 text-sm">{news.excerpt}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </section>

              {/* Services */}
              <section>
                <h3 className="text-2xl font-montserrat font-bold text-garden-dark mb-6">Наши услуги</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {[
                    { icon: 'Droplets', title: 'Водоснабжение', desc: 'Центральный водопровод' },
                    { icon: 'Zap', title: 'Электричество', desc: '220В на каждом участке' },
                    { icon: 'Shield', title: 'Охрана', desc: '24/7 охрана территории' },
                    { icon: 'Wifi', title: 'Интернет', desc: 'Высокоскоростной интернет' }
                  ].map((service, index) => (
                    <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 animate-scale-in">
                      <CardContent className="p-6">
                        <div className="w-12 h-12 bg-garden-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                          <Icon name={service.icon} size={24} className="text-garden-green" />
                        </div>
                        <h4 className="font-montserrat font-semibold text-garden-dark mb-2">{service.title}</h4>
                        <p className="text-sm text-gray-600">{service.desc}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </section>
            </TabsContent>
          </Tabs>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-garden-dark text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-lg font-montserrat font-semibold mb-4">СНТ "Зелёная Долина"</h4>
              <p className="text-gray-300 text-sm leading-relaxed">
                Современное садовое товарищество с развитой инфраструктурой и активным сообществом садоводов.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-montserrat font-semibold mb-4">Быстрые ссылки</h4>
              <div className="space-y-2">
                {['Новости', 'Документы', 'Платежи', 'Контакты'].map((link) => (
                  <a key={link} href="#" className="text-gray-300 hover:text-garden-green transition-colors text-sm block">
                    {link}
                  </a>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-lg font-montserrat font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-sm text-gray-300">
                <p>+7 (903) 123-45-67</p>
                <p>info@snt-zelenaya-dolina.ru</p>
                <p>г. Москва, ул. Садовая, д. 123</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-6 text-center">
            <p className="text-gray-400 text-sm">
              © 2024 СНТ "Зелёная Долина". Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default GardenCooperativeWebsite;