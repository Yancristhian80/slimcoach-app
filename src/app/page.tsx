"use client";

import {
  Check, Sparkles, Heart, Dumbbell, Brain, Crown, Users, Trophy,
  ChevronRight, Home, Apple, MessageCircle, User, Droplets, Footprints,
  TrendingUp, Calendar, Clock, Flame, Target, Award, Camera, Settings,
  Plus, Minus, Search, Play, BookOpen, Zap, Coffee, Moon, Sun
} from "lucide-react";
import { useState } from "react";

type Screen = 'dashboard' | 'nutrition' | 'workouts' | 'coach' | 'community' | 'profile';

export default function SlimCoachApp() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('dashboard');
  const [weight, setWeight] = useState(75);
  const [waterGlasses, setWaterGlasses] = useState(4);
  const [steps, setSteps] = useState(5420);
  const [showPremiumModal, setShowPremiumModal] = useState(false);

  // ----------------------
  // DASHBOARD SCREEN
  // ----------------------
  const DashboardScreen = () => (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Olá, Maria! 👋</h1>
          <p className="text-gray-600 mt-1">Vamos continuar sua jornada hoje</p>
        </div>

        <button className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center shadow-lg">
          <Sparkles className="w-6 h-6 text-white" />
        </button>
      </div>

      {/* Motivação */}
      <div className="bg-gradient-to-br from-emerald-500 to-teal-600 rounded-3xl p-6 text-white shadow-xl">
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
            <Flame className="w-6 h-6" />
          </div>
          <div>
            <h3 className="font-bold text-lg mb-2">Motivação do Dia</h3>
            <p className="text-emerald-50">
              "Cada pequeno passo conta. Você está 23% mais perto do seu objetivo esta semana!"
            </p>
          </div>
        </div>
      </div>

      {/* Cards de progresso */}
      <div className="grid grid-cols-2 gap-4">

        {/* Peso */}
        <div className="bg-white rounded-2xl p-5 border-2 border-gray-100 shadow-sm">
          <div className="flex items-center gap-2 mb-3">
            <TrendingUp className="w-5 h-5 text-emerald-600" />
            <span className="text-sm font-semibold text-gray-600">Peso Atual</span>
          </div>
          <div className="flex items-baseline gap-1">
            <span className="text-3xl font-bold text-gray-900">{weight}</span>
            <span className="text-lg text-gray-500">kg</span>
          </div>
          <p className="text-xs text-emerald-600 mt-2">-2.5kg este mês 🎉</p>
        </div>

        {/* Hidratação */}
        <div className="bg-white rounded-2xl p-5 border-2 border-gray-100 shadow-sm">
          <div className="flex items-center gap-2 mb-3">
            <Droplets className="w-5 h-5 text-blue-600" />
            <span className="text-sm font-semibold text-gray-600">Hidratação</span>
          </div>
          <div className="flex items-baseline gap-1">
            <span className="text-3xl font-bold text-gray-900">{waterGlasses}</span>
            <span className="text-lg text-gray-500">/8</span>
          </div>

          <div className="flex gap-1 mt-3">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className={`h-2 flex-1 rounded-full ${i < waterGlasses ? 'bg-blue-500' : 'bg-gray-200'}`}
              />
            ))}
          </div>
        </div>

        {/* Passos */}
        <div className="bg-white rounded-2xl p-5 border-2 border-gray-100 shadow-sm">
          <div className="flex items-center gap-2 mb-3">
            <Footprints className="w-5 h-5 text-orange-600" />
            <span className="text-sm font-semibold text-gray-600">Passos</span>
          </div>
          <span className="text-3xl font-bold text-gray-900" suppressHydrationWarning>{steps.toLocaleString('pt-BR')}</span>
          <p className="text-xs text-gray-500 mt-2">Meta: 10.000 passos</p>
        </div>

        {/* Calorias */}
        <div className="bg-white rounded-2xl p-5 border-2 border-gray-100 shadow-sm">
          <div className="flex items-center gap-2 mb-3">
            <Flame className="w-5 h-5 text-red-600" />
            <span className="text-sm font-semibold text-gray-600">Calorias</span>
          </div>
          <span className="text-3xl font-bold text-gray-900">1.450</span>
          <p className="text-xs text-gray-500 mt-2">de 1.800 kcal</p>
        </div>
      </div>

      {/* Tarefa do dia */}
      <div className="bg-white rounded-2xl p-6 border-2 border-gray-100 shadow-sm">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
            <Target className="w-5 h-5 text-purple-600" />
          </div>
          <div>
            <h3 className="font-bold text-gray-900">Tarefa do Dia</h3>
            <p className="text-sm text-gray-500">Complete para ganhar 50 pontos</p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-4">
          <p className="text-gray-700 font-medium mb-3">
            Faça o treino "Cardio Rápido" de 10 minutos
          </p>
          <button className="w-full py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-semibold">
            Começar Agora
          </button>
        </div>
      </div>

      {/* Mini lição */}
      <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-6 border-2 border-orange-100">
        <div className="flex items-center gap-3 mb-3">
          <Brain className="w-6 h-6 text-orange-600" />
          <h3 className="font-bold text-gray-900">Mini Lição de Hoje</h3>
        </div>
        <p className="text-gray-700 mb-4">
          <strong>Compulsão alimentar:</strong> Quando sentir vontade de comer por ansiedade, beba água e espere 10 minutos. Na maioria das vezes a vontade passa!
        </p>
        <button className="text-orange-600 font-semibold text-sm flex items-center gap-1">
          Ler mais <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );

  // ----------------------
  // NUTRITION SCREEN
  // ----------------------
  const NutritionScreen = () => (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Nutrição 🍎</h1>
        <p className="text-gray-600 mt-1">Acompanhe suas refeições e calorias</p>
      </div>

      {/* Resumo do dia */}
      <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl p-6 text-white shadow-xl">
        <div className="flex items-center justify-between mb-4">
          <div>
            <p className="text-green-100 text-sm">Calorias Hoje</p>
            <h2 className="text-4xl font-bold">1.450</h2>
            <p className="text-green-100 text-sm mt-1">de 1.800 kcal</p>
          </div>

          <div className="w-20 h-20 rounded-full border-4 border-white/30 flex items-center justify-center">
            <span className="text-2xl font-bold">81%</span>
          </div>
        </div>

        <div className="h-2 bg-white/20 rounded-full overflow-hidden">
          <div className="h-full bg-white rounded-full" style={{ width: '81%' }} />
        </div>
      </div>

      {/* Macros */}
      <div className="grid grid-cols-3 gap-3">
        <div className="bg-white rounded-xl p-4 border-2 border-gray-100 text-center">
          <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-2">
            <Droplets className="w-5 h-5 text-blue-600" />
          </div>
          <p className="text-2xl font-bold text-gray-900">65g</p>
          <p className="text-xs text-gray-500 mt-1">Proteínas</p>
        </div>

        <div className="bg-white rounded-xl p-4 border-2 border-gray-100 text-center">
          <div className="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center mx-auto mb-2">
            <Zap className="w-5 h-5 text-yellow-600" />
          </div>
          <p className="text-2xl font-bold text-gray-900">180g</p>
          <p className="text-xs text-gray-500 mt-1">Carboidratos</p>
        </div>

        <div className="bg-white rounded-xl p-4 border-2 border-gray-100 text-center">
          <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center mx-auto mb-2">
            <Flame className="w-5 h-5 text-orange-600" />
          </div>
          <p className="text-2xl font-bold text-gray-900">45g</p>
          <p className="text-xs text-gray-500 mt-1">Gorduras</p>
        </div>
      </div>

      {/* Refeições */}
      <div className="space-y-3">
        <h3 className="font-bold text-gray-900">Refeições de Hoje</h3>

        {/* Café da manhã */}
        <div className="bg-white rounded-xl p-4 border-2 border-gray-100">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center">
                <Coffee className="w-5 h-5 text-orange-600" />
              </div>
              <div>
                <h4 className="font-bold text-gray-900">Café da Manhã</h4>
                <p className="text-sm text-gray-500">420 kcal</p>
              </div>
            </div>
            <Check className="w-5 h-5 text-emerald-600" />
          </div>

          <div className="space-y-2 text-sm text-gray-600">
            <p>• 2 ovos mexidos</p>
            <p>• 2 fatias de pão integral</p>
            <p>• 1 banana</p>
          </div>
        </div>

        {/* Almoço */}
        <div className="bg-white rounded-xl p-4 border-2 border-gray-100">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center">
                <Sun className="w-5 h-5 text-yellow-600" />
              </div>
              <div>
                <h4 className="font-bold text-gray-900">Almoço</h4>
                <p className="text-sm text-gray-500">680 kcal</p>
              </div>
            </div>
            <Check className="w-5 h-5 text-emerald-600" />
          </div>

          <div className="space-y-2 text-sm text-gray-600">
            <p>• Peito de frango grelhado (150g)</p>
            <p>• Arroz integral (100g)</p>
            <p>• Salada verde</p>
          </div>
        </div>

        {/* Jantar */}
        <div className="bg-white rounded-xl p-4 border-2 border-emerald-200 border-dashed">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
                <Moon className="w-5 h-5 text-purple-600" />
              </div>
              <div>
                <h4 className="font-bold text-gray-900">Jantar</h4>
                <p className="text-sm text-gray-500">Ainda não registrado</p>
              </div>
            </div>
            <button className="w-8 h-8 rounded-full bg-emerald-600 flex items-center justify-center">
              <Plus className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>
      </div>

      {/* Botão adicionar */}
      <button className="w-full py-4 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-xl font-semibold flex items-center justify-center gap-2">
        <Plus className="w-5 h-5" />
        Adicionar Refeição
      </button>
    </div>
  );

  // ----------------------
  // WORKOUTS SCREEN
  // ----------------------
  const WorkoutsScreen = () => (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Treinos 💪</h1>
        <p className="text-gray-600 mt-1">Seus exercícios personalizados</p>
      </div>

      {/* Progresso semanal */}
      <div className="bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl p-6 text-white shadow-xl">
        <div className="flex items-center justify-between mb-4">
          <div>
            <p className="text-purple-100 text-sm">Treinos Esta Semana</p>
            <h2 className="text-4xl font-bold">4/5</h2>
          </div>

          <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center">
            <Dumbbell className="w-8 h-8" />
          </div>
        </div>

        <div className="flex gap-2">
          {['S', 'T', 'Q', 'Q', 'S', 'S', 'D'].map((day, i) => (
            <div key={i} className="flex-1 text-center">
              <div className={`w-full h-2 rounded-full mb-1 ${i < 4 ? 'bg-white' : 'bg-white/20'}`} />
              <span className="text-xs">{day}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Treino de hoje */}
      <div className="bg-white rounded-2xl p-6 border-2 border-gray-100 shadow-sm">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center">
            <Flame className="w-5 h-5 text-orange-600" />
          </div>
          <div>
            <h3 className="font-bold text-gray-900">Treino de Hoje</h3>
            <p className="text-sm text-gray-500">30 minutos • Intermediário</p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-xl p-4 mb-4">
          <h4 className="font-bold text-gray-900 mb-2">Treino HIIT Completo</h4>
          <p className="text-sm text-gray-600 mb-3">
            Queime calorias com exercícios de alta intensidade
          </p>

          <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>30 min</span>
            </div>
            <div className="flex items-center gap-1">
              <Flame className="w-4 h-4" />
              <span>350 kcal</span>
            </div>
            <div className="flex items-center gap-1">
              <Target className="w-4 h-4" />
              <span>8 exercícios</span>
            </div>
          </div>

          <button className="w-full py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-xl font-semibold flex items-center justify-center gap-2">
            <Play className="w-5 h-5" />
            Começar Treino
          </button>
        </div>
      </div>

      {/* Biblioteca de treinos */}
      <div className="space-y-3">
        <h3 className="font-bold text-gray-900">Biblioteca de Treinos</h3>

        {/* Treino 1 */}
        <div className="bg-white rounded-xl p-4 border-2 border-gray-100">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <h4 className="font-bold text-gray-900 mb-1">Cardio Rápido</h4>
              <p className="text-sm text-gray-600 mb-3">
                Treino cardiovascular de 10 minutos
              </p>

              <div className="flex items-center gap-3 text-xs text-gray-500">
                <span className="flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  10 min
                </span>
                <span className="flex items-center gap-1">
                  <Flame className="w-3 h-3" />
                  120 kcal
                </span>
              </div>
            </div>

            <button className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center">
              <Play className="w-5 h-5 text-emerald-600" />
            </button>
          </div>
        </div>

        {/* Treino 2 */}
        <div className="bg-white rounded-xl p-4 border-2 border-gray-100">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <h4 className="font-bold text-gray-900 mb-1">Força e Resistência</h4>
              <p className="text-sm text-gray-600 mb-3">
                Fortaleça seus músculos com exercícios funcionais
              </p>

              <div className="flex items-center gap-3 text-xs text-gray-500">
                <span className="flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  25 min
                </span>
                <span className="flex items-center gap-1">
                  <Flame className="w-3 h-3" />
                  280 kcal
                </span>
              </div>
            </div>

            <button className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center">
              <Play className="w-5 h-5 text-emerald-600" />
            </button>
          </div>
        </div>

        {/* Treino 3 */}
        <div className="bg-white rounded-xl p-4 border-2 border-gray-100">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <h4 className="font-bold text-gray-900 mb-1">Yoga e Alongamento</h4>
              <p className="text-sm text-gray-600 mb-3">
                Relaxe e melhore sua flexibilidade
              </p>

              <div className="flex items-center gap-3 text-xs text-gray-500">
                <span className="flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  15 min
                </span>
                <span className="flex items-center gap-1">
                  <Flame className="w-3 h-3" />
                  80 kcal
                </span>
              </div>
            </div>

            <button className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center">
              <Play className="w-5 h-5 text-emerald-600" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  // ----------------------
  // COACH SCREEN
  // ----------------------
  const CoachScreen = () => (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Coach IA 🤖</h1>
        <p className="text-gray-600 mt-1">Seu assistente pessoal de saúde</p>
      </div>

      {/* Status do coach */}
      <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-6 text-white shadow-xl">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center">
            <MessageCircle className="w-8 h-8" />
          </div>
          <div>
            <h3 className="font-bold text-lg">Coach Luana</h3>
            <p className="text-blue-100 text-sm">Disponível 24/7 para você</p>
          </div>
        </div>

        <div className="bg-white/10 rounded-xl p-3">
          <p className="text-sm text-white">
            "Oi Maria! Vi que você está indo muito bem. Quer conversar sobre sua alimentação de hoje?"
          </p>
        </div>
      </div>

      {/* Tópicos sugeridos */}
      <div className="space-y-3">
        <h3 className="font-bold text-gray-900">Tópicos Sugeridos</h3>

        <button className="w-full bg-white rounded-xl p-4 border-2 border-gray-100 text-left hover:border-emerald-200 transition-colors">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
              <Apple className="w-5 h-5 text-green-600" />
            </div>
            <div>
              <h4 className="font-bold text-gray-900">Dicas de Alimentação</h4>
              <p className="text-sm text-gray-500">Como fazer escolhas mais saudáveis</p>
            </div>
          </div>
        </button>

        <button className="w-full bg-white rounded-xl p-4 border-2 border-gray-100 text-left hover:border-emerald-200 transition-colors">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
              <Dumbbell className="w-5 h-5 text-purple-600" />
            </div>
            <div>
              <h4 className="font-bold text-gray-900">Plano de Treino</h4>
              <p className="text-sm text-gray-500">Exercícios personalizados para você</p>
            </div>
          </div>
        </button>

        <button className="w-full bg-white rounded-xl p-4 border-2 border-gray-100 text-left hover:border-emerald-200 transition-colors">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center">
              <Brain className="w-5 h-5 text-orange-600" />
            </div>
            <div>
              <h4 className="font-bold text-gray-900">Motivação e Mindset</h4>
              <p className="text-sm text-gray-500">Supere desafios mentais</p>
            </div>
          </div>
        </button>

        <button className="w-full bg-white rounded-xl p-4 border-2 border-gray-100 text-left hover:border-emerald-200 transition-colors">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
              <Heart className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <h4 className="font-bold text-gray-900">Controle Emocional</h4>
              <p className="text-sm text-gray-500">Lidar com compulsão alimentar</p>
            </div>
          </div>
        </button>
      </div>

      {/* Histórico recente */}
      <div className="space-y-3">
        <h3 className="font-bold text-gray-900">Conversas Recentes</h3>

        <div className="bg-white rounded-xl p-4 border-2 border-gray-100">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
              <Check className="w-4 h-4 text-emerald-600" />
            </div>
            <div className="flex-1">
              <p className="text-sm text-gray-900 font-medium mb-1">
                Como lidar com vontade de doces à noite
              </p>
              <p className="text-xs text-gray-500">Há 2 dias</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-4 border-2 border-gray-100">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
              <Check className="w-4 h-4 text-emerald-600" />
            </div>
            <div className="flex-1">
              <p className="text-sm text-gray-900 font-medium mb-1">
                Exercícios para fazer em casa
              </p>
              <p className="text-xs text-gray-500">Há 5 dias</p>
            </div>
          </div>
        </div>
      </div>

      {/* Botão nova conversa */}
      <button className="w-full py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl font-semibold flex items-center justify-center gap-2">
        <MessageCircle className="w-5 h-5" />
        Iniciar Nova Conversa
      </button>
    </div>
  );

  // ----------------------
  // COMMUNITY SCREEN
  // ----------------------
  const CommunityScreen = () => (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Comunidade 🏆</h1>
        <p className="text-gray-600 mt-1">Desafios, ranking e conquistas</p>
      </div>

      {/* Seus pontos */}
      <div className="bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl p-6 text-white shadow-xl">
        <div className="flex items-center justify-between mb-4">
          <div>
            <p className="text-purple-100 text-sm">Seus Pontos</p>
            <h2 className="text-4xl font-bold">2.450</h2>
          </div>

          <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center">
            <Trophy className="w-8 h-8" />
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Award className="w-5 h-5" />
          <span className="text-sm">Posição #127 no ranking geral</span>
        </div>
      </div>

      {/* Desafio da semana */}
      <div className="bg-white rounded-2xl p-6 border-2 border-gray-100 shadow-sm">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center">
            <Target className="w-5 h-5 text-orange-600" />
          </div>

          <div>
            <h3 className="font-bold text-gray-900">Desafio da Semana</h3>
            <p className="text-sm text-gray-500">Termina em 3 dias</p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-xl p-4">
          <h4 className="font-bold text-gray-900 mb-2">7 Dias de Treino Consecutivos</h4>
          <p className="text-sm text-gray-600 mb-3">Complete 7 treinos seguidos e ganhe 500 pontos!</p>

          <button className="w-full py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105">
            Participar do Desafio
          </button>
        </div>
      </div>

      {/* Conquistas */}
      <div className="space-y-3">
        <h3 className="font-bold text-gray-900">Suas Conquistas</h3>

        <div className="grid grid-cols-3 gap-3">
          <div className="bg-white rounded-xl p-4 border-2 border-yellow-200 text-center">
            <div className="w-12 h-12 rounded-full bg-yellow-100 flex items-center justify-center mx-auto mb-2">
              <Trophy className="w-6 h-6 text-yellow-600" />
            </div>
            <p className="text-xs font-bold text-gray-900">Primeira Semana</p>
          </div>

          <div className="bg-white rounded-xl p-4 border-2 border-blue-200 text-center">
            <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-2">
              <Droplets className="w-6 h-6 text-blue-600" />
            </div>
            <p className="text-xs font-bold text-gray-900">Hidratação Master</p>
          </div>

          <div className="bg-white rounded-xl p-4 border-2 border-green-200 text-center">
            <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-2">
              <Target className="w-6 h-6 text-green-600" />
            </div>
            <p className="text-xs font-bold text-gray-900">Meta Atingida</p>
          </div>
        </div>
      </div>

      {/* Ranking */}
      <div className="space-y-3">
        <h3 className="font-bold text-gray-900">Top 5 da Semana</h3>

        {[
          { name: 'Ana Silva', points: 3850, position: 1 },
          { name: 'Carlos Mendes', points: 3620, position: 2 },
          { name: 'Julia Santos', points: 3450, position: 3 },
          { name: 'Pedro Costa', points: 3280, position: 4 },
          { name: 'Mariana Lima', points: 3100, position: 5 },
        ].map((user) => (
          <div key={user.position} className="bg-white rounded-xl p-4 border-2 border-gray-100 flex items-center gap-3">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
              user.position === 1 ? 'bg-yellow-100 text-yellow-600' :
              user.position === 2 ? 'bg-gray-100 text-gray-600' :
              user.position === 3 ? 'bg-orange-100 text-orange-600' :
              'bg-gray-50 text-gray-500'
            }`}>
              #{user.position}
            </div>

            <div className="flex-1">
              <p className="font-bold text-gray-900">{user.name}</p>
              <p className="text-sm text-gray-500">{user.points} pontos</p>
            </div>

            {user.position <= 3 && (
              <Trophy className={`w-5 h-5 ${
                user.position === 1 ? 'text-yellow-500' :
                user.position === 2 ? 'text-gray-400' :
                'text-orange-400'
              }`} />
            )}
          </div>
        ))}
      </div>
    </div>
  );

  // ----------------------
  // RENDERIZAÇÃO PRINCIPAL
  // ----------------------
  const renderScreen = () => {
    switch (currentScreen) {
      case 'dashboard': return <DashboardScreen />;
      case 'nutrition': return <NutritionScreen />;
      case 'workouts': return <WorkoutsScreen />;
      case 'coach': return <CoachScreen />;
      case 'community': return <CommunityScreen />;
      default: return <DashboardScreen />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {renderScreen()}

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 py-4 px-6 flex justify-between">
        {[
          { id: 'dashboard', icon: Home, label: 'Início' },
          { id: 'nutrition', icon: Apple, label: 'Nutrição' },
          { id: 'workouts', icon: Dumbbell, label: 'Treinos' },
          { id: 'coach', icon: MessageCircle, label: 'Coach' },
          { id: 'community', icon: Users, label: 'Comunidade' },
        ].map(item => (
          <button
            key={item.id}
            onClick={() => setCurrentScreen(item.id as Screen)}
            className={`flex flex-col items-center text-xs ${
              currentScreen === item.id ? 'text-emerald-600' : 'text-gray-500'
            }`}
          >
            <item.icon className="w-6 h-6 mb-1" />
            {item.label}
          </button>
        ))}
      </div>
    </div>
  );
}
